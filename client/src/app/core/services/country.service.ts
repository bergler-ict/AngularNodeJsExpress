import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ICountry } from '../models/country.interface';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CountryService {
  countries$ = new BehaviorSubject<ICountry[]>([]);

  constructor(private http: HttpClient) { }

  getAllCountries() {
    this.http.get<ICountry[]>('api/countries').subscribe((response) => {
      this.countries$.next(response);
    });
  }
}
