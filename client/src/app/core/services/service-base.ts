import { BehaviorSubject, Observable } from 'rxjs';
import { ISelectItem } from '../models/select-item.interface';

export abstract class ServiceBase<TType> {
  items$ = new BehaviorSubject<TType[]>([]);
  selectItems$ = new BehaviorSubject<ISelectItem[]>([]);
  rootUri: string;

  constructor(rootUri: string) {
    this.rootUri = rootUri;
  }

  abstract loadAll() : Observable<TType[]>;
  abstract loadSelectItems() : Observable<ISelectItem[]>;
  abstract create(item: TType) : Observable<TType>;
  abstract update(item: TType): Observable<TType>;
  abstract delete(id: number): Observable<number>;
}