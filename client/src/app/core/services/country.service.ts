import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { ISelectItem } from '../models/select-item.interface';

@Injectable({
  providedIn: 'root'
})
export class CountryService {
  countrySelectItems$ = new BehaviorSubject<ISelectItem[]>([]);

  constructor(private http: HttpClient) { }

  getCountrySelectItems() {
    this.http.get<ISelectItem[]>('api/countries/compact').subscribe((response) => {
      this.countrySelectItems$.next(response);
    });
  }
}
