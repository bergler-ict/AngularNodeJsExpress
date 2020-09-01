import { Injectable } from '@angular/core';
import { BehaviorSubject, of } from 'rxjs';
import { IDriverRanking } from '../models/driver-ranking.interface';
import { ITeamRanking } from '../models/team-ranking.interface';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RankingService {
  driverRankings$ = new BehaviorSubject<IDriverRanking[]>([]);
  teamRankings$ = new BehaviorSubject<ITeamRanking[]>([]);

  constructor(private http: HttpClient) {}

  loadDriverRankings(year) {
    this.http.get<IDriverRanking[]>(`api/rankings/driver?year=${year}`)
      .pipe(catchError((err) => {
        console.log('Error: ', err);
        return of([])
      }))
      .subscribe((rankings) => this.driverRankings$.next(rankings));
  }

  loadTeamRankings(year) {
    this.http.get<ITeamRanking[]>(`api/rankings/team?year=${year}`)
      .pipe(catchError((err) => {
        console.log('Error: ', err);
        return of([])
      }))
      .subscribe((rankings) => this.teamRankings$.next(rankings));
  }
}