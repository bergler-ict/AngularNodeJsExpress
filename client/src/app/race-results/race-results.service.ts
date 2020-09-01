import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject, of } from 'rxjs';
import { MessagesService } from '../core/messages/messages.service';
import { catchError } from 'rxjs/operators';
import { MessageType } from '../core/messages/message-types.enum';
import { IRaceResult } from './models/race-result.interface';
import { IRaceResultsForm } from './models/race-results-form.interface';

@Injectable({
  providedIn: 'root'
})
export class RaceResultsService {
  raceresults$ = new BehaviorSubject<IRaceResult[]>([]);

  constructor(private http: HttpClient, private messageService: MessagesService) { }

  getRaceResults(grandprixId: number): void {
    this.http.get<IRaceResult[]>(`/api/raceresults/${grandprixId}`).pipe(catchError((err) => {
      this.messageService.showSelfclosingAlert(err, MessageType.Danger, 2500);
      return of([]);
    })).subscribe(results => this.raceresults$.next(results));
  }

  setRaceResults(raceResults: IRaceResultsForm): Observable<number> {
    return this.http.put<number>(`/api/raceresults/${raceResults.grandprixId}`, raceResults.grandprix.raceResults)
      .pipe(catchError((err) => {
        this.messageService.showSelfclosingAlert(err, MessageType.Danger, 2500);
        return of(0);
      }));
  }
}
