import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RouterModule } from '@angular/router';
import { MessagesService } from './messages/messages.service';
import { ConfirmationDialogComponent } from './dialogs/confirmation-dialog/confirmation-dialog.component';
import { TranslateModule } from '@ngx-translate/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CountryService } from './services/country.service';
import { NgbNavModule } from '@ng-bootstrap/ng-bootstrap';
import { PromptDialogComponent } from './dialogs/prompt-dialog/prompt-dialog.component';

@NgModule({
  declarations: [HomeComponent, NavbarComponent, ConfirmationDialogComponent, PromptDialogComponent],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    TranslateModule.forChild(),
    NgbNavModule
  ],
  exports: [
    NavbarComponent
  ],
  providers: [MessagesService, CountryService ],
  entryComponents: [ConfirmationDialogComponent, PromptDialogComponent]
})
export class CoreModule { }
