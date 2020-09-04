import { Component, AfterViewInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { PromptDialogComponent } from 'src/app/core/dialogs/prompt-dialog/prompt-dialog.component';
import { IGrandPrix, DefaultGrandPrix } from '../../core/models/grandprix.interface';
import { RaceResultsEditorComponent } from '../race-results-editor/race-results-editor.component';
import { RaceResultsService } from 'src/app/core/services/race-results.service';
import { MessagesService } from 'src/app/core/messages/messages.service';
import { MessageType } from 'src/app/core/messages/message-types.enum';
import { GrandprixEditorComponent } from '../grandprix-editor/grandprix-editor.component';
import { GrandPrixsService } from '../grand-prixs.service';
import { OverviewComponentBase } from 'src/app/core/overview-component-base';
import { takeUntil } from 'rxjs/operators';
import { ConfirmationDialogComponent } from 'src/app/core/dialogs/confirmation-dialog/confirmation-dialog.component';
import { DefaultTypes } from 'src/app/core/default-types.enum';

@Component({
  selector: 'fom-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss']
})
export class OverviewComponent extends OverviewComponentBase<IGrandPrix> implements AfterViewInit {

  constructor(
    private raceResultsService: RaceResultsService,
    private grandprixsService: GrandPrixsService) {
      super(grandprixsService, GrandprixEditorComponent, DefaultTypes.Grandprix);
      this.setSortMethod();
    }

  ngAfterViewInit(): void {
    const ref = this.dialogService.open(PromptDialogComponent, { backdrop: 'static', centered: true });
    ref.componentInstance.data = { titleKey: 'CALENDAR.DIALOGS.PROMPT.YEAR', value: new Date().getFullYear() };
    ref.result.then(data => {
      this.grandprixsService.loadAllForCalendarYear(data.value)
        .pipe(takeUntil(this.unsubscribe$))
        .subscribe(grandprixs => this.grandprixsService.items$.next(grandprixs));
    });
  }

  onAddRaceResults(grandPrix: IGrandPrix) {
    this.raceResultsService.getRaceResults(grandPrix.id);
    const ref = this.dialogService.open(RaceResultsEditorComponent, { backdrop: 'static', centered: true, size: 'lg' })
    ref.componentInstance.data = { name: '', titleKey: 'CALENDAR.DIALOGS.RACERESULTS.TITLE', grandprixId: grandPrix.id };
    ref.result.then((results) => {
      this.raceResultsService.setRaceResults(results).pipe(takeUntil(this.unsubscribe$)).subscribe(() => {
        this.messagesService.show('RACERESULTS.MESSAGES.SAVE.SUCCESS', MessageType.Success);
      });
    });
  }

  private setSortMethod() {
    this.sortMethod = (a, b) => {
      if (a.date < b.date) {
        return -1;
      }
      if (a.date > b.date) {
        return 1;
      }
      return 0;
    }
  }
}
