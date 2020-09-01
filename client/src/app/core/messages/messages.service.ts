import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { MessageType } from './message-types.enum';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root'
})
export class MessagesService {
  message$ = new BehaviorSubject<string>('');
  type$ = new BehaviorSubject<string>('');
  dismissable$ = new BehaviorSubject<boolean>(false);
  show$ = new BehaviorSubject<boolean>(false);

  constructor(private translateService: TranslateService) { }

  showAlert(message: string, type: MessageType, closable: boolean){
    this.message$.next(message);
    this.type$.next(type);
    this.dismissable$.next(closable);
    this.show$.next(true);
  }

  showSelfclosingAlert(message: string, type: MessageType, milliSeconds: number) {
    this.showAlert(message, type, false);
    setTimeout(() => {
      this.show$.next(false);
    }, milliSeconds);
  }

  showSelfclosingTranslatedAlert(translationKey: string, type: MessageType, milliSeconds: number) {
    this.showAlert(this.translateService.instant(translationKey), type, false);
    setTimeout(() => {
      this.show$.next(false);
    }, milliSeconds);
  }
}
