import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ITeam, DefaultTeam } from '../core/models/team.interface';
import { Observable, of } from 'rxjs';
import { MessagesService } from '../core/messages/messages.service';
import { catchError } from 'rxjs/operators';
import { MessageType } from '../core/messages/message-types.enum';
import { ISelectItem } from '../core/models/select-item.interface';
import { ServiceBase } from '../core/services/service-base';

@Injectable({
  providedIn: 'root'
})
export class TeamsService extends ServiceBase<ITeam> {

  constructor(private http: HttpClient, private messageService: MessagesService) {
    super('/api/teams');
  }

  loadAll(): Observable<ITeam[]> {
    return this.http.get<ITeam[]>(`${this.rootUri}`).pipe(catchError((err) => {
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

  create(team: ITeam): Observable<ITeam> {
    return this.http.post<ITeam>(`${this.rootUri}`, team).pipe(catchError((err) => {
      this.messageService.show(err, MessageType.Danger);
      return of(DefaultTeam);
    }));
  }

  update(team: ITeam): Observable<ITeam> {
    return this.http.put<ITeam>(`${this.rootUri}`, team).pipe(catchError((err) => {
      this.messageService.show(err, MessageType.Danger);
      return of(DefaultTeam);
    }));
  }

  delete(id: number): Observable<number> {
    console.log(id);
    return this.http.delete<number>(`${this.rootUri}/${id}`).pipe(catchError((err) => {
      this.messageService.show(err, MessageType.Danger);
      return of(0);
    }));
  }
}
