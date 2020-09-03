import { OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';

export abstract class ComponentBase implements OnDestroy {
  unsubscribe$ = new Subject<void>();

  constructor() {}

  ngOnDestroy(): void {
    // Complete this subject, so all (takeUntil(this.unsubscibe$)) subscriptions of this component are removed on component destruction.
    // If we don't do this could lead to memory leaks, there the subscriptions will remain active even when the component
    // is no longer active.
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
}