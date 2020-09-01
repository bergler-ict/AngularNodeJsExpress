import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, of } from 'rxjs';
import { MessagesService } from '../core/messages/messages.service';
import { catchError } from 'rxjs/operators';
import { MessageType } from '../core/messages/message-types.enum';
import { IGrandPrix } from './models/grandprix.interface';

@Injectable({
  providedIn: 'root'
})
export class CalendarService {
  grandprixs$ = new BehaviorSubject<IGrandPrix[]>([]);

  constructor(private http: HttpClient, private messageService: MessagesService) { }

  getAllGrandprixsOnYearCalendar(year: number): void {
    this.http.get<IGrandPrix[]>(`/api/grandprixs/${year}`).pipe(catchError((err) => {
      this.messageService.showSelfclosingAlert(err, MessageType.Danger, 2500);
      return of([]);
    })).subscribe(response => {
      this.grandprixs$.next(response);
    });
  }
}
