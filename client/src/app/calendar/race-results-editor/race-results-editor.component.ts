import { Component, OnInit, OnDestroy } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder, FormGroup, FormArray } from '@angular/forms';
import { takeUntil } from 'rxjs/operators';
import { IRaceResult, DefaultRaceResult } from '../../race-results/models/race-result.interface';
import { DriversService } from 'src/app/drivers/drivers.service';
import { RaceResultsService } from 'src/app/race-results/race-results.service';
import { ComponentBase } from 'src/app/core/component-base';

enum FormFields {
  position = 'position',
  driverId = 'driverId',
  time = 'time',
  laps = 'laps',
  fastestLap = 'fastestLap'
}

@Component({
  selector: 'fom-race-results-editor',
  templateUrl: './race-results-editor.component.html',
  styleUrls: ['./race-results-editor.component.scss']
})
export class RaceResultsEditorComponent extends ComponentBase implements OnInit, OnDestroy {
  data: any;
  resultsForm: FormGroup;

  constructor(public raceResultsService: RaceResultsService, public driversService: DriversService,
     public modal: NgbActiveModal, private formBuilder: FormBuilder) {
       super();
     }

  ngOnInit(): void {
    this.driversService.getAllDrivers();
    this.resultsForm = this.formBuilder.group({
      grandprixId: [this.data.grandprixId],
      grandprix: this.formBuilder.group({
        raceResults: this.formBuilder.array([])
      })
    });
    this.raceResultsService.raceresults$.pipe(takeUntil(this.unsubscribe$)).subscribe(results => {
      this.patch(results);
    });
  }

  ngOnDestroy(): void {
    this.raceResultsService.raceresults$.next([]);
  }

  addRow() {
    const result = DefaultRaceResult;
    const control = this.resultsForm.get('grandprix.raceResults') as FormArray;
    result.position = control.controls.length + 1;
    result.grandprixId = this.data.grandprixId;

    control.push(this.formBuilder.group({
      position: [result.position],
      driverId: [result.driverId],
      time: [result.time],
      laps: [result.laps],
      fastestLap: [result.fastestLap]
    }));
  }

  onFastestLapSet(child) {
    const groups = (this.resultsForm.get('grandprix.raceResults') as FormArray).controls;
    groups.forEach((fg:FormGroup) => {
      if (fg.controls[FormFields.position].value !== child.controls[FormFields.position].value) {
        fg.controls[FormFields.fastestLap].setValue(false);
      }
    });
  }

  private patch(results: IRaceResult[]) {
    const control = this.resultsForm.get('grandprix.raceResults') as FormArray;
    control.clear();

    results.forEach(r => {
      control.push(this.formBuilder.group({
        position: [r.position],
        driverId: [r.driverId],
        time: [r.time],
        laps: [r.laps],
        fastestLap: [r.fastestLap]
      }))
    });
  }
}
