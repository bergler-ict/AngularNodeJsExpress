import { Component, AfterViewInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { PromptDialogComponent } from 'src/app/core/dialogs/prompt-dialog/prompt-dialog.component';
import { CalendarService } from '../calendar.service';
import { IGrandPrix, DefaultGrandPrix } from '../models/grandprix.interface';
import { RaceResultsEditorComponent } from '../race-results-editor/race-results-editor.component';
import { RaceResultsService } from 'src/app/race-results/race-results.service';
import { MessagesService } from 'src/app/core/messages/messages.service';
import { MessageType } from 'src/app/core/messages/message-types.enum';
import { GrandprixEditorComponent } from '../grandprix-editor/grandprix-editor.component';
import { GrandPrixsService } from '../grand-prixs.service';
import { ComponentBase } from 'src/app/core/component-base';
import { takeUntil } from 'rxjs/operators';
import { ConfirmationDialogComponent } from 'src/app/core/dialogs/confirmation-dialog/confirmation-dialog.component';

@Component({
  selector: 'fom-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss']
})
export class OverviewComponent extends ComponentBase implements AfterViewInit {

  constructor(public calendarService: CalendarService,
    private raceResultsService: RaceResultsService,
    private messageService: MessagesService,
    private grandprixsService: GrandPrixsService,
    private dialogService: NgbModal) {
      super();
    }

  ngAfterViewInit(): void {
    const ref = this.dialogService.open(PromptDialogComponent, { backdrop: 'static', centered: true });
    ref.componentInstance.data = { titleKey: 'CALENDAR.DIALOGS.PROMPT.YEAR', value: new Date().getFullYear() };
    ref.result.then(data => {
      this.calendarService.getAllGrandprixsOnYearCalendar(data.value);
    });
  }

  onCreate() {
    this.onEdit(DefaultGrandPrix);
  }

  onEdit(grandprix: IGrandPrix) {
    const ref = this.dialogService.open(GrandprixEditorComponent, { backdrop: 'static', centered: true, size: 'lg' });
    ref.componentInstance.grandprix$.next(grandprix);
    ref.result.then((editorForm) => {
      const editedGrandprix = { ...editorForm.value };
      if (editedGrandprix.id === 0) {
        this.grandprixsService.createGrandprix(editedGrandprix).pipe(takeUntil(this.unsubscribe$)).subscribe((response) => {
          this.updateGrandprixsListing(response);
          this.messageService.showSelfclosingTranslatedAlert('GRANDPRIXS.MESSAGES.CREATION.SUCCESS', MessageType.Info, 2000);
        });
      } else {
        this.grandprixsService.saveGrandprix(editedGrandprix).pipe(takeUntil(this.unsubscribe$)).subscribe((response) => {
          this.updateGrandprixsListing(response);
          this.messageService.showSelfclosingTranslatedAlert('GRANDPRIXS.MESSAGES.UPDATE.SUCCESS', MessageType.Info, 2000);
        });
      }
    },
    () => {
      // Cancelled
    });
  }

  onAddRaceResults(grandPrix: IGrandPrix) {
    this.raceResultsService.getRaceResults(grandPrix.id);
    const ref = this.dialogService.open(RaceResultsEditorComponent, { backdrop: 'static', centered: true, size: 'lg' })
    ref.componentInstance.data = { name: '', titleKey: 'CALENDAR.DIALOGS.RACERESULTS.TITLE', grandprixId: grandPrix.id };
    ref.result.then((results) => {
      this.raceResultsService.setRaceResults(results).pipe(takeUntil(this.unsubscribe$)).subscribe(() => {
        this.messageService.showSelfclosingTranslatedAlert('RACERESULTS.MESSAGES.SAVE.SUCCESS', MessageType.Success, 2000);
      });
    });
  }

  onDelete(grandprix: IGrandPrix): void {
    const ref = this.dialogService.open(ConfirmationDialogComponent);
    ref.componentInstance.data = {
      name: grandprix.name,
      titleKey: 'GRANDPRIXS.MESSAGES.DELETE.TITLE',
      messageKey: 'GRANDPRIXS.MESSAGES.DELETE.MESSAGE'
    };
    ref.result.then(() => {
      this.deleteGrandprix(grandprix.id);
    });
  }

  private deleteGrandprix(id: number): void {
    this.grandprixsService.deleteGrandprix(id).pipe(
      takeUntil(this.unsubscribe$) // This will trigger removal of subscription when component is destroyed (see OnDestroy).
    ).subscribe((response: number) => {
      if (response === 1) {
        const currentDrivers = this.calendarService.grandprixs$.getValue();
        this.calendarService.grandprixs$.next(currentDrivers.filter(driver => driver.id !== id));
        this.messageService.showSelfclosingTranslatedAlert('GRANDPRIXS.MESSAGES.DELETE.SUCCESS', MessageType.Info, 2000);
      }
    });
  }

  private updateGrandprixsListing(grandprix) {
    // Get existing displayed collection except passed in grandprix
    const grandprixs = this.calendarService.grandprixs$.getValue().filter(tms => tms.id !== grandprix.id);

    // Add new grandprix to collection
    grandprixs.push(grandprix);

    // Set and sort updated drivers collection for display
    this.calendarService.grandprixs$.next(grandprixs.sort((a, b) => {
      if (a.date < b.date) {
        return -1;
      }
      if (a.date > b.date) {
        return 1;
      }
      return 0;
    }));
  }
}
