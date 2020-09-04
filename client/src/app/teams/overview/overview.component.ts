import { Component, OnInit, OnDestroy } from '@angular/core';
import { TeamsService } from '../teams.service';
import { takeUntil } from 'rxjs/operators';
import { ITeam } from '../../core/models/team.interface';
import { TeamEditorComponent } from '../team-editor/team-editor.component';
import { OverviewComponentBase } from 'src/app/core/overview-component-base';
import { DefaultTypes } from 'src/app/core/default-types.enum';

@Component({
  selector: 'fom-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss']
})
export class OverviewComponent extends OverviewComponentBase<ITeam>  implements OnInit, OnDestroy {

  constructor(public teamsService: TeamsService) {
    super(teamsService, TeamEditorComponent, DefaultTypes.Team);
  }

  ngOnInit(): void {
    this.teamsService.loadAll()
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe(teams => this.teamsService.items$.next(teams));
  }
}
