import { Component, OnInit, OnDestroy } from '@angular/core';
import { TeamsService } from '../teams.service';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { ITeam, DefaultTeam } from '../models/team.interface';
import { MessagesService } from 'src/app/core/messages/messages.service';
import { MessageType } from 'src/app/core/messages/message-types.enum';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ConfirmationDialogComponent } from 'src/app/core/dialogs/confirmation-dialog/confirmation-dialog.component';
import { TeamEditorComponent } from '../team-editor/team-editor.component';

@Component({
  selector: 'fom-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss']
})
export class OverviewComponent implements OnInit, OnDestroy {
  unsubscribe$ = new Subject();

  constructor(public teamsService: TeamsService, private messageService: MessagesService, private dialogService: NgbModal ) { }

  ngOnInit(): void {
    this.teamsService.getAllTeams();
  }

  ngOnDestroy(): void {
    // Complete this subject, so all (takeUntil(this.unsubscibe$)) subscriptions of this component are removed on component destruction.
    // If we don't do this could lead to memory leaks, there the subscriptions will remain active even when the component
    // is no longer active.
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

  onCreate(): void {
    this.onEdit(DefaultTeam);
  }

  onEdit(team: ITeam): void {
    const ref = this.dialogService.open(TeamEditorComponent, { backdrop: 'static', centered: true, size: 'lg' });
    ref.componentInstance.team$.next(team);
    ref.result.then((editorForm) => {
      const editedTeam = { ...editorForm.value };
      if(editedTeam.id === 0) {
        this.teamsService.createTeam(editedTeam).pipe(takeUntil(this.unsubscribe$)).subscribe((response) => {
          this.updateTeamsListing(response, false);
        });
      } else {
        this.teamsService.updateTeam(editedTeam).pipe(takeUntil(this.unsubscribe$)).subscribe((response) =>{
          if (response === 1) {
            this.updateTeamsListing(editedTeam, true);
            this.messageService.showSelfclosingTranslatedAlert('TEAMS.MESSAGES.UPDATE.SUCCESS', MessageType.Info, 2000);
          }
        });
      }
    });
  }

  private updateTeamsListing(team: ITeam, isUpdate: boolean) {
    // Get existing displayed collection
    let teams = this.teamsService.teams$.getValue();

    if(isUpdate) {
      teams = teams.filter(tms => tms.id !== team.id);
    }

    // Add new team to collection
    teams.push(team);

    // Set and sort updated teams collection for display
    this.teamsService.teams$.next(teams.sort((a, b) => {
      if (a.name.toLowerCase() < b.name.toLowerCase()) {
        return -1;
      }
      if (a.name.toLowerCase() > b.name.toLowerCase()) {
        return 1;
      }
      return 0;
    }));
  }

  onDelete(team: ITeam): void {
    const ref = this.dialogService.open(ConfirmationDialogComponent);
    ref.componentInstance.data = { name: team.name, titleKey: 'TEAMS.MESSAGES.DELETE.TITLE', messageKey: 'TEAMS.MESSAGES.DELETE.MESSAGE' };
    ref.result.then(() => {
      this.deleteTeam(team.id);
    });
  }

  private deleteTeam(id: number): void {
    this.teamsService.deleteTeam(id).pipe(
      takeUntil(this.unsubscribe$) // This will trigger removal of subscription when component is destroyed (see OnDestroy).
    ).subscribe((response: number) => {
      if(response === 1) {
        const currentTeams = this.teamsService.teams$.getValue();
        this.teamsService.teams$.next(currentTeams.filter(team => team.id !== id));
        this.messageService.showSelfclosingTranslatedAlert('TEAMS.MESSAGES.DELETE.SUCCESS', MessageType.Info, 2000);
      }
    });
  }
}
