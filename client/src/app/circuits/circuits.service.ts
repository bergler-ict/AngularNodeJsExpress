import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ICircuit } from './models/circuit.interface';
import { MessagesService } from '../core/messages/messages.service';
import { catchError } from 'rxjs/operators';
import { MessageType } from '../core/messages/message-types.enum';
import { of, BehaviorSubject } from 'rxjs';
import { ISelectItem } from '../core/models/select-item.interface';

@Injectable({
  providedIn: 'root'
})
export class CircuitsService {
  circuits$ = new BehaviorSubject<ICircuit[]>([]);
  circuitsItems$ = new BehaviorSubject<ISelectItem[]>([]);

  constructor(private http: HttpClient, private messageService: MessagesService) { }

  getAllCircuits(): void {
    this.http.get<ICircuit[]>('/api/circuits').pipe(catchError((err) => {
      this.messageService.showSelfclosingAlert(err, MessageType.Danger, 2500);
      return of([]);
    })).subscribe(circuits => this.circuits$.next(circuits));
  }

  getCircuitSelectItems(): void {
    this.http.get<ISelectItem[]>('/api/circuits/compact').pipe(catchError((err) => {
      this.messageService.showSelfclosingAlert(err, MessageType.Danger, 2500);
      return of([]);
    })).subscribe(circuits => this.circuitsItems$.next(circuits));
  }
}
