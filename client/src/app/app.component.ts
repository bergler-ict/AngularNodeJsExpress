import { Component, OnInit } from '@angular/core';
import { MessagesService } from './core/messages/messages.service';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'fom-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{

  constructor(private translateService: TranslateService) { }

  ngOnInit() {
    this.translateService.use('nl');
  }
}
