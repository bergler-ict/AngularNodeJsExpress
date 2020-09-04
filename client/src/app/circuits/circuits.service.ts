import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ICircuit, DefaultCircuit } from '../core/models/circuit.interface';
import { MessagesService } from '../core/messages/messages.service';
import { catchError } from 'rxjs/operators';
import { MessageType } from '../core/messages/message-types.enum';
import { of, BehaviorSubject, Observable } from 'rxjs';
import { ISelectItem } from '../core/models/select-item.interface';
import { ServiceBase } from '../core/services/service-base';

@Injectable({
  providedIn: 'root'
})
export class CircuitsService extends ServiceBase<ICircuit> {

  constructor(private http: HttpClient, private messageService: MessagesService) {
    super('api/circuits');
  }

  loadAll(): Observable<ICircuit[]> {
    return this.http.get<ICircuit[]>(`${this.rootUri}`).pipe(catchError((err) => {
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

  create(circuit: ICircuit): Observable<ICircuit> {
    return this.http.post<ICircuit>(`${this.rootUri}`, circuit).pipe(catchError((err) => {
      this.messageService.show(err, MessageType.Danger);
      return of(DefaultCircuit);
    }));
  }

  update(circuit: ICircuit): Observable<ICircuit> {
    return this.http.put<ICircuit>(`${this.rootUri}`, circuit).pipe(catchError((err) => {
      this.messageService.show(err, MessageType.Danger);
      return of(DefaultCircuit);
    }));
  }

  delete(id: number) {
    return this.http.delete<number>(`${this.rootUri}/${id}`).pipe(catchError((err) => {
      this.messageService.show(err, MessageType.Danger);
      return of(0);
    }));
  }
}
