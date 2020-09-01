import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ITeam, DefaultTeam } from './models/team.interface';
import { Observable, BehaviorSubject, of } from 'rxjs';
import { MessagesService } from '../core/messages/messages.service';
import { catchError } from 'rxjs/operators';
import { MessageType } from '../core/messages/message-types.enum';

@Injectable({
  providedIn: 'root'
})
export class TeamsService {
  teams$ = new BehaviorSubject<ITeam[]>([]);

  constructor(private http: HttpClient, private messageService: MessagesService) { }

  getAllTeams(): void {
    this.http.get<ITeam[]>('/api/teams').pipe(catchError((err) => {
      this.messageService.showSelfclosingAlert(err, MessageType.Danger, 2500);
      return of([]);
    })).subscribe(response => {
      this.teams$.next(response);
    });
  }

  createTeam(team: ITeam): Observable<ITeam> {
    return this.http.post<ITeam>('api/teams', team).pipe(catchError((err) => {
      this.messageService.showSelfclosingAlert(err, MessageType.Danger, 2500);
      return of(DefaultTeam);
    }));
  }

  updateTeam(team: ITeam): Observable<number> {
    return this.http.put<number>('api/teams', team).pipe(catchError((err) => {
      this.messageService.showSelfclosingAlert(err, MessageType.Danger, 2500);
      return of(0);
    }));
  }

  deleteTeam(id: number): Observable<number> {
    return this.http.delete<number>(`/api/teams/${id}`).pipe(catchError((err) => {
      this.messageService.showSelfclosingAlert(err, MessageType.Danger, 2500);
      return of(0);
    }));
  }
}
