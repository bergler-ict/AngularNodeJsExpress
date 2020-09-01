import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { IDriver, DefaultDriver } from '../models/driver.interface';
import { FormBuilder, FormGroup } from '@angular/forms';
import { TeamsService } from 'src/app/teams/teams.service';
import { CountryService } from 'src/app/core/services/country.service';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'fom-driver-editor',
  templateUrl: './driver-editor.component.html',
  styleUrls: ['./driver-editor.component.scss']
})
export class DriverEditorComponent implements OnInit {
  driver$ = new BehaviorSubject<IDriver>(DefaultDriver);
  driverFormgroup: FormGroup;

  constructor(public modal: NgbActiveModal,
    private formBuilder: FormBuilder,
    public teamsService: TeamsService,
    public countryService: CountryService) { }

  ngOnInit(): void {
    this.countryService.getAllCountries();
    this.teamsService.getAllTeams();

    this.driver$.subscribe(driver => {
      if(driver) {
        this.driverFormgroup = this.formBuilder.group({
          id: [driver.id],
          name: [driver.name],
          birthDate: [this.fromJsonDate(driver.birthDate)],
          startNumber: [driver.startNumber],
          grandPrixs: [driver.grandPrixs],
          podiums: [driver.podiums],
          teamId: [driver.teamId],
          countryId: [driver.countryId]
        });
      }
    });
  }

  fromJsonDate(jDate): string {
    const bDate: Date = new Date(jDate);
    return bDate.toISOString().substring(0, 10);
  }
}