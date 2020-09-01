import { Component, OnInit } from '@angular/core';
import { RankingService } from '../services/ranking.service';

@Component({
  selector: 'fom-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  active = 1;
  
  constructor(public rankingService: RankingService) { }

  ngOnInit(): void {
    const year = new Date().getFullYear();
    this.rankingService.loadDriverRankings(year);
    this.rankingService.loadTeamRankings(year);
  }

}
