import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ITeam } from '../models/team.interface';
import { BehaviorSubject } from 'rxjs';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { CountryService } from 'src/app/core/services/country.service';
import { takeUntil } from 'rxjs/operators';
import { ComponentBase } from 'src/app/core/component-base';

@Component({
  selector: 'fom-team-editor',
  templateUrl: './team-editor.component.html',
  styleUrls: ['./team-editor.component.scss']
})
export class TeamEditorComponent extends ComponentBase implements OnInit {
  team$: BehaviorSubject<ITeam>;
  teamFormgroup: FormGroup;

  constructor(public modal: NgbActiveModal, private formBuilder: FormBuilder, public countryService: CountryService) {
    super();
    this.team$ = new BehaviorSubject<ITeam>(null);
  }

  ngOnInit(): void {
    this.countryService.getCountrySelectItems();
    this.team$.pipe(takeUntil(this.unsubscribe$)).subscribe(team => {
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
