import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject, of } from 'rxjs';
import { IDriver, DefaultDriver } from './models/driver.interface';
import { MessagesService } from '../core/messages/messages.service';
import { catchError } from 'rxjs/operators';
import { MessageType } from '../core/messages/message-types.enum';

@Injectable({
  providedIn: 'root'
})
export class DriversService {
  drivers$ = new BehaviorSubject<IDriver[]>([]);

  constructor(private http: HttpClient, private messageService: MessagesService) { }

  getAllDrivers(): void {
    this.http.get<IDriver[]>('/api/drivers').pipe(catchError((err) => {
      this.messageService.showSelfclosingAlert(err, MessageType.Danger, 2500);
      return of([]);
    })).subscribe(drivers => this.drivers$.next(drivers));
  }

  updateDriver(driver: IDriver): Observable<IDriver> {
    return this.http.put<IDriver>('api/drivers', driver).pipe(catchError((err) => {
      this.messageService.showSelfclosingAlert(err, MessageType.Danger, 2500);
      return of(DefaultDriver);
    }));
  }

  createDriver(driver: IDriver): Observable<IDriver> {
    return this.http.post<IDriver>('api/drivers', driver).pipe(catchError((err) => {
      this.messageService.showSelfclosingAlert(err, MessageType.Danger, 2500);
      return of(DefaultDriver);
    }));
  }

  deleteDriver(id: number): Observable<number> {
    return this.http.delete<number>(`/api/drivers/${id}`).pipe(catchError((err) => {
      this.messageService.showSelfclosingAlert(err, MessageType.Danger, 2500);
      return of(0);
    }));
  }
}
