import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { IDriver, DefaultDriver } from '../core/models/driver.interface';
import { MessagesService } from '../core/messages/messages.service';
import { catchError } from 'rxjs/operators';
import { MessageType } from '../core/messages/message-types.enum';
import { ServiceBase } from '../core/services/service-base';
import { ISelectItem } from '../core/models/select-item.interface';

@Injectable({
  providedIn: 'root'
})
export class DriversService extends ServiceBase<IDriver> {

  constructor(private http: HttpClient, private messageService: MessagesService) {
    super('/api/drivers');
  }

  loadAll(): Observable<IDriver[]> {
    return this.http.get<IDriver[]>(`${this.rootUri}`).pipe(catchError((err) => {
      this.messageService.show(err, MessageType.Danger);
      return of([]);
    }));
  }

  loadSelectItems(): Observable<ISelectItem[]> {
    return this.http.get<ISelectItem[]>(`${this.rootUri}/compact`).pipe(catchError((err) => {
      this.messageService.show(err, MessageType.Danger);
      return of([]);
    }));
  }

  update(driver: IDriver): Observable<IDriver> {
    return this.http.put<IDriver>(`${this.rootUri}`, driver).pipe(catchError((err) => {
      this.messageService.show(err, MessageType.Danger);
      return of(DefaultDriver);
    }));
  }

  create(driver: IDriver): Observable<IDriver> {
    return this.http.post<IDriver>(`${this.rootUri}`, driver).pipe(catchError((err) => {
      this.messageService.show(err, MessageType.Danger);
      return of(DefaultDriver);
    }));
  }

  delete(id: number): Observable<number> {
    return this.http.delete<number>(`${this.rootUri}/${id}`).pipe(catchError((err) => {
      this.messageService.show(err, MessageType.Danger);
      return of(0);
    }));
  }
}
