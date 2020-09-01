import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OverviewComponent } from './overview/overview.component';
import { Routes, RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { DriversService } from './drivers.service';
import { DriverEditorComponent } from './driver-editor/driver-editor.component';
import { ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [
  {
    path: '',
    component: OverviewComponent
  }
];

@NgModule({
  declarations: [OverviewComponent, DriverEditorComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    TranslateModule.forChild(),
    ReactiveFormsModule
  ],
  providers: [ DriversService ],
  entryComponents: [DriverEditorComponent]
})
export class DriversModule { }
