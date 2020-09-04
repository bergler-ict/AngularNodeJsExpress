import { OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { MessagesService } from './messages/messages.service';
import { AppInjector } from './app-injector';
import { DefaultTypes } from './default-types.enum';
import { DefaultsFactory } from './defaults-factory';
import { MessageType } from './messages/message-types.enum';
import { takeUntil } from 'rxjs/operators';
import { ServiceBase } from './services/service-base';
import { EditorComponentBase } from './editor-component-base';
import { IGeneric } from './models/generic.interface';
import { ConfirmationDialogComponent } from './dialogs/confirmation-dialog/confirmation-dialog.component';

export abstract class OverviewComponentBase<TType extends IGeneric> implements OnDestroy {
  protected unsubscribe$ = new Subject<void>();
  protected service: ServiceBase<TType>;
  protected editor: EditorComponentBase<TType>;
  protected dialogService: NgbModal;
  protected messagesService: MessagesService;
  protected sortMethod: any; // Set this method in child class when sorting needs NOT to be done on name
  private defaultValues: TType;

  constructor(service: ServiceBase<TType>, editor: any, defaultType: DefaultTypes) {
    if (!(service instanceof ServiceBase)) {
      throw new Error('Invalid service type used. Service should be extended from ServiceBase<TType>.');
    }
    if(typeof(editor) !== typeof(EditorComponentBase)){
      throw new Error('Invalid editor type used. Editor should be extended from EditorComponentBase.');
    }

    this.service = service;
    this.editor = editor;
    this.defaultValues = DefaultsFactory.getDefaultValue(defaultType) as unknown as TType;
    const injector = AppInjector.getInjector();
    this.dialogService = injector.get(NgbModal);
    this.messagesService = injector.get(MessagesService);
  }

  ngOnDestroy(): void {
    // Complete this subject, so all (takeUntil(this.unsubscibe$)) subscriptions of this component are removed on component destruction.
    // If we don't do this could lead to memory leaks, there the subscriptions will remain active even when the component
    // is no longer active.
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

  onCreate(): void {
    this.onEdit(this.defaultValues);
  }

  onEdit(item: TType) {
    const ref = this.dialogService.open(this.editor, { backdrop: 'static', centered: true, size: 'lg' });
    ref.componentInstance.item$.next(item);
    ref.result.then((editorForm) => {
      if (editorForm.value.id === 0) {
        this.service.create(editorForm.value).pipe(takeUntil(this.unsubscribe$)).subscribe((response) => {
          this.updateListing(response);
          this.messagesService.show('MESSAGES.CREATESUCCESS', MessageType.Success);
        });
      } else {
        this.service.update(editorForm.value).pipe(takeUntil(this.unsubscribe$)).subscribe((response) => {
          this.updateListing(response);
          this.messagesService.show('MESSAGES.UPDATESUCCESS', MessageType.Success);
        });
      }
    });
  }

  onDelete(item: TType) {
    const ref = this.dialogService.open(ConfirmationDialogComponent);
    ref.componentInstance.data = { name: item.name, titleKey: 'MESSAGES.DELETIONTITLE', messageKey: 'MESSAGES.DELETIONMESSAGE' };
    ref.result.then(() => {
      this.delete(item.id);
    });
  }

  updateListing(item: TType) {
    // Get existing displayed collection
    const items = this.service.items$.getValue().filter(i => i.id !== item.id);

    // Add new team to collection
    items.push(item);

    // Set and sort updated teams collection for display. If sort method is set use it, otherwise use default sort by name method.
    this.service.items$.next(items.sort(this.sortMethod ? this.sortMethod : this.sortByName));
  }

  private delete(id: number): void {
    this.service.delete(id).pipe(
      takeUntil(this.unsubscribe$) // This will trigger removal of subscription when component is destroyed (see OnDestroy).
    ).subscribe((response: number) => {
      if(response === 1) {
        const currentItems = this.service.items$.getValue();
        this.service.items$.next(currentItems.filter(team => team.id !== id));
        this.messagesService.show('MESSAGES.DELETIONSUCCES', MessageType.Success);
      }
    });
  }

  private sortByName = (a, b) => {
    if (a.name.toLowerCase() < b.name.toLowerCase()) {
      return -1;
    }
    if (a.name.toLowerCase() > b.name.toLowerCase()) {
      return 1;
    }
    return 0;
  }
}