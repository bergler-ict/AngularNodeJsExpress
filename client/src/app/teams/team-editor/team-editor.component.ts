import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ITeam } from '../../core/models/team.interface';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { CountryService } from 'src/app/core/services/country.service';
import { takeUntil } from 'rxjs/operators';
import { EditorComponentBase } from 'src/app/core/editor-component-base';

@Component({
  selector: 'fom-team-editor',
  templateUrl: './team-editor.component.html',
  styleUrls: ['./team-editor.component.scss']
})
export class TeamEditorComponent extends EditorComponentBase<ITeam> implements OnInit {
  teamFormgroup: FormGroup;

  constructor(public modal: NgbActiveModal, private formBuilder: FormBuilder, public countryService: CountryService) {
    super();
  }

  ngOnInit(): void {
    this.countryService.loadSelectItems()
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe(items => this.countryService.selectItems$.next(items));

    this.item$.pipe(takeUntil(this.unsubscribe$)).subscribe(team => {
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
