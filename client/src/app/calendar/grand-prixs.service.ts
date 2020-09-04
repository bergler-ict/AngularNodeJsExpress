import { Injectable } from '@angular/core';
import { IGrandPrix } from '../core/models/grandprix.interface';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { ServiceBase } from '../core/services/service-base';
import { ISelectItem } from '../core/models/select-item.interface';
import { MessagesService } from '../core/messages/messages.service';
import { MessageType } from '../core/messages/message-types.enum';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class GrandPrixsService extends ServiceBase<IGrandPrix> {
  year: number;

  constructor(private http: HttpClient, private messageService: MessagesService) {
    super('api/grandprixs');
  }

  loadAllForCalendarYear(year: number) {
    this.year = year;
    return this.loadAll();
  }

  loadAll(): Observable<IGrandPrix[]> {
    return this.http.get<IGrandPrix[]>(`${this.rootUri}/${this.year}`).pipe(catchError((err) => {
      this.messageService.show(err, MessageType.Danger);
      return of([]);
    }));
  }

  loadSelectItems(): Observable<ISelectItem[]> {
    throw new Error('Method not implemented.');
  }

  create(grandprix: IGrandPrix): Observable<IGrandPrix>
  {
    return this.http.post<IGrandPrix>(`${this.rootUri}`, grandprix);
  }

  update(grandprix: IGrandPrix): Observable<IGrandPrix> {
    return this.http.put<IGrandPrix>(`${this.rootUri}`, grandprix);
  }

  delete(id: number): Observable<number> {
    return this.http.delete<number>(`${this.rootUri}/${id}`);
  }
}
