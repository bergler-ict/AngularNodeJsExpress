import { Component, AfterViewInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { PromptDialogComponent } from 'src/app/core/dialogs/prompt-dialog/prompt-dialog.component';
import { CalendarService } from '../calendar.service';
import { IGrandPrix } from '../models/grandprix.interface';
import { RaceResultsEditorComponent } from '../race-results-editor/race-results-editor.component';
import { RaceResultsService } from 'src/app/race-results/race-results.service';
import { MessagesService } from 'src/app/core/messages/messages.service';
import { MessageType } from 'src/app/core/messages/message-types.enum';

@Component({
  selector: 'fom-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss']
})
export class OverviewComponent implements AfterViewInit {

  constructor(public calendarService: CalendarService,private raceResultsService: RaceResultsService,
    private messagesService: MessagesService,
    private dialogService: NgbModal) { }

  ngAfterViewInit(): void {
    const ref = this.dialogService.open(PromptDialogComponent, { backdrop: 'static', centered: true });
    ref.componentInstance.data = { titleKey: 'CALENDAR.DIALOGS.PROMPT.YEAR', value: new Date().getFullYear() };
    ref.result.then(data => {
      this.calendarService.getAllGrandprixsOnYearCalendar(data.value);
    });
  }

  onAddRaceResults(grandPrix: IGrandPrix) {
    this.raceResultsService.getRaceResults(grandPrix.id);
    const ref = this.dialogService.open(RaceResultsEditorComponent, { backdrop: 'static', centered: true, size: 'lg' })
    ref.componentInstance.data = { name: '', titleKey: 'CALENDAR.DIALOGS.RACERESULTS.TITLE', grandprixId: grandPrix.id };
    ref.result.then((results) => {
      this.raceResultsService.setRaceResults(results).subscribe(() => {
        this.messagesService.showSelfclosingTranslatedAlert('RACERESULTS.MESSAGES.SAVE.SUCCESS', MessageType.Success, 2000);
      });
    });
  }
}
