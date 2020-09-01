import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ITeam } from '../models/team.interface';
import { BehaviorSubject } from 'rxjs';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { CountryService } from 'src/app/core/services/country.service';

@Component({
  selector: 'fom-team-editor',
  templateUrl: './team-editor.component.html',
  styleUrls: ['./team-editor.component.scss']
})
export class TeamEditorComponent implements OnInit {
  team$: BehaviorSubject<ITeam>;
  teamFormgroup: FormGroup;

  constructor(public modal: NgbActiveModal, private formBuilder: FormBuilder, public countryService: CountryService) {
    this.team$ = new BehaviorSubject<ITeam>(null);
  }

  ngOnInit(): void {
    this.countryService.getAllCountries();
    this.team$.subscribe(team => {
      if(team) {
        this.teamFormgroup = this.formBuilder.group({
          id: [team.id],
          name: [team.name, Validators.required],
          fullname: [team.fullname, Validators.required],
          manufacturer: [team.manufacturer, Validators.required],
          countryId: [team.countryId]
        });
      }
    });
  }
}
