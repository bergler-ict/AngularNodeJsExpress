import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OverviewComponent } from './overview/overview.component';
import { Routes, RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';
import { RaceResultsEditorComponent } from './race-results-editor/race-results-editor.component';

const routes: Routes = [
  {
    path: '',
    component: OverviewComponent
  }
];

@NgModule({
  declarations: [OverviewComponent, RaceResultsEditorComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    TranslateModule.forChild(),
    FormsModule,
    ReactiveFormsModule,
    NgbTooltipModule
  ],
  entryComponents: [ RaceResultsEditorComponent ]
})
export class CalendarModule { }
