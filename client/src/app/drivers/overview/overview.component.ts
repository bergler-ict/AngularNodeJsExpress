import { Component, OnInit } from '@angular/core';
import { IDriver } from '../../core/models/driver.interface';
import { DriversService } from '../drivers.service';
import { takeUntil } from 'rxjs/operators';
import { DriverEditorComponent } from '../driver-editor/driver-editor.component';
import { OverviewComponentBase } from 'src/app/core/overview-component-base';
import { DefaultTypes } from 'src/app/core/default-types.enum';

@Component({
  selector: 'fom-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss']
})
export class OverviewComponent extends OverviewComponentBase<IDriver> implements OnInit {

  constructor(public driversService: DriversService) {
    super(driversService, DriverEditorComponent , DefaultTypes.Driver);
  }

  ngOnInit(): void {
    this.driversService.loadAll().pipe(takeUntil(this.unsubscribe$)).subscribe(drivers => {
      this.driversService.items$.next(drivers);
    });
  }
}
