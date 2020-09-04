import { Component, OnInit } from '@angular/core';
import { IDriver } from '../../core/models/driver.interface';
import { FormBuilder, FormGroup } from '@angular/forms';
import { TeamsService } from 'src/app/teams/teams.service';
import { CountryService } from 'src/app/core/services/country.service';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { takeUntil } from 'rxjs/operators';
import { EditorComponentBase } from 'src/app/core/editor-component-base';

@Component({
  selector: 'fom-driver-editor',
  templateUrl: './driver-editor.component.html',
  styleUrls: ['./driver-editor.component.scss']
})
export class DriverEditorComponent extends EditorComponentBase<IDriver> implements OnInit {
  driverFormgroup: FormGroup;

  constructor(public modal: NgbActiveModal,
    private formBuilder: FormBuilder,
    public teamsService: TeamsService,
    public countryService: CountryService) {
      super();
    }

  ngOnInit(): void {
    this.countryService.loadSelectItems()
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe(items => this.countryService.selectItems$.next(items));

    this.teamsService.loadSelectItems()
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe(items => this.teamsService.selectItems$.next(items));

    this.item$.pipe(takeUntil(this.unsubscribe$)).subscribe(driver => {
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
