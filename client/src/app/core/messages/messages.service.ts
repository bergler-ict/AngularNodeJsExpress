import { Injectable } from '@angular/core';
import { MessageType } from './message-types.enum';
import { TranslateService } from '@ngx-translate/core';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class MessagesService {

  constructor(private translateService: TranslateService, private toastr: ToastrService) { }

  show(messageTranslationKey: string, type: MessageType): void {
    switch (type) {
      case MessageType.Success:
        this.toastr.success(this.translateService.instant(messageTranslationKey), this.translateService.instant('TOAST.SUCCESSTITLE'));
        break;
      case MessageType.Danger:
        this.toastr.error(this.translateService.instant(messageTranslationKey), this.translateService.instant('TOAST.ERRORTITLE'));
        break;
      case MessageType.Warning:
        this.toastr.warning(this.translateService.instant(messageTranslationKey), this.translateService.instant('TOAST.WARNINGTITLE'));
        break;
    }
  }
}
