import { Component, OnInit } from '@angular/core';
import { IDriver, DefaultDriver } from '../models/driver.interface';
import { DriversService } from '../drivers.service';
import { takeUntil } from 'rxjs/operators';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { DriverEditorComponent } from '../driver-editor/driver-editor.component';
import { MessagesService } from 'src/app/core/messages/messages.service';
import { MessageType } from 'src/app/core/messages/message-types.enum';
import { ConfirmationDialogComponent } from 'src/app/core/dialogs/confirmation-dialog/confirmation-dialog.component';
import { ComponentBase } from 'src/app/core/component-base';

@Component({
  selector: 'fom-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss']
})
export class OverviewComponent extends ComponentBase implements OnInit {

  constructor(public driversService: DriversService, private messageService: MessagesService, private dialogService: NgbModal) {
    super();
  }

  ngOnInit(): void {
    this.driversService.getAllDrivers();
  }

  onCreate() {
    this.onEdit(DefaultDriver);
  }

  onEdit(driver: IDriver) {
    const ref = this.dialogService.open(DriverEditorComponent, { backdrop: 'static', centered: true, size: 'lg' });
    ref.componentInstance.driver$.next(driver);
    ref.result.then((editorForm) => {
      const editedDriver = { ...editorForm.value };
      if (editedDriver.id === 0) {
        this.driversService.createDriver(editedDriver).pipe(takeUntil(this.unsubscribe$)).subscribe((response) => {
          this.updateDriversListing(response);
          this.messageService.showSelfclosingTranslatedAlert('DRIVERS.MESSAGES.CREATION.SUCCESS', MessageType.Info, 2000);
        });
      } else {
        this.driversService.updateDriver(editedDriver).pipe(takeUntil(this.unsubscribe$)).subscribe((response) => {
            this.updateDriversListing(response);
            this.messageService.showSelfclosingTranslatedAlert('DRIVERS.MESSAGES.UPDATE.SUCCESS', MessageType.Info, 2000);
        });
      }
    });
  }

  onDelete(driver: IDriver): void {
    const ref = this.dialogService.open(ConfirmationDialogComponent);
    ref.componentInstance.data = {
      name: driver.name,
      titleKey: 'DRIVERS.MESSAGES.DELETE.TITLE',
      messageKey: 'DRIVERS.MESSAGES.DELETE.MESSAGE'
    };
    ref.result.then(() => {
      this.deleteDriver(driver.id);
    });
  }

  private deleteDriver(id: number): void {
    this.driversService.deleteDriver(id).pipe(
      takeUntil(this.unsubscribe$) // This will trigger removal of subscription when component is destroyed (see OnDestroy).
    ).subscribe((response: number) => {
      if (response === 1) {
        const currentDrivers = this.driversService.drivers$.getValue();
        this.driversService.drivers$.next(currentDrivers.filter(driver => driver.id !== id));
        this.messageService.showSelfclosingTranslatedAlert('DRIVERS.MESSAGES.DELETE.SUCCESS', MessageType.Info, 2000);
      }
    });
  }

  private updateDriversListing(driver: IDriver) {
    // Get existing displayed collection except passed in driver
    const drivers = this.driversService.drivers$.getValue().filter(tms => tms.id !== driver.id);

    // Add new driver to collection
    drivers.push(driver);

    // Set and sort updated drivers collection for display
    this.driversService.drivers$.next(drivers.sort((a, b) => {
      if (a.name.toLowerCase() < b.name.toLowerCase()) {
        return -1;
      }
      if (a.name.toLowerCase() > b.name.toLowerCase()) {
        return 1;
      }
      return 0;
    }));
  }
}
