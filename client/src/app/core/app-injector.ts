import { Injector } from '@angular/core';

/**
 * Static injector class used for DI purposes in base classes.
 * It is a service which is set at application start (see app.module constructor) 
 */
export class AppInjector {

  private static injector: Injector;

  static setInjector(injector: Injector) {
    AppInjector.injector = injector;
  }

  static getInjector(): Injector {
    return AppInjector.injector;
  }
}