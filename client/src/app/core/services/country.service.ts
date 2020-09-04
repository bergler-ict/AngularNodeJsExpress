import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { ISelectItem } from '../models/select-item.interface';
import { ServiceBase } from './service-base';
import { ICountry } from '../models/country.interface';

@Injectable({
  providedIn: 'root'
})
export class CountryService extends ServiceBase<ICountry> {

  constructor(private http: HttpClient) {
    super('api/countries')
  }

  loadAll(): Observable<ICountry[]> {
    throw new Error('Method not implemented.');
  }

  loadSelectItems(): Observable<ISelectItem[]> {
    return this.http.get<ISelectItem[]>(`${this.rootUri}/compact`);
  }

  create(item: ICountry): Observable<ICountry> {
    throw new Error('Method not implemented.');
  }

  update(item: ICountry): Observable<ICountry> {
    throw new Error('Method not implemented.');
  }

  delete(id: number): Observable<number> {
    throw new Error('Method not implemented.');
  }
}
