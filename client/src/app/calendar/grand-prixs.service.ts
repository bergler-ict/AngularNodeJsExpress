import { Injectable } from '@angular/core';
import { IGrandPrix } from './models/grandprix.interface';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GrandPrixsService {

  constructor(private http: HttpClient) { }

  createGrandprix(grandprix: IGrandPrix): Observable<IGrandPrix>
  {
    return this.http.post<IGrandPrix>('api/grandprixs', grandprix);
  }

  saveGrandprix(grandprix: IGrandPrix): Observable<IGrandPrix> {
    return this.http.put<IGrandPrix>('api/grandprixs', grandprix);
  }

  deleteGrandprix(id: number): Observable<number> {
    return this.http.delete<number>(`api/grandprixs/${id}`);
  }
}
