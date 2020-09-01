import { Component, OnInit, OnDestroy } from '@angular/core';
import { CalendarService } from '../calendar.service';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder, FormGroup, FormArray } from '@angular/forms';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { IRaceResult, DefaultRaceResult } from '../../race-results/models/race-result.interface';
import { DriversService } from 'src/app/drivers/drivers.service';
import { RaceResultsService } from 'src/app/race-results/race-results.service';

@Component({
  selector: 'fom-race-results-editor',
  templateUrl: './race-results-editor.component.html',
  styleUrls: ['./race-results-editor.component.scss']
})
export class RaceResultsEditorComponent implements OnInit, OnDestroy {
  data: any;
  resultsForm: FormGroup;
  unsubscribe$ = new Subject();

  constructor(public raceResultsService: RaceResultsService, public driversService: DriversService,
     public modal: NgbActiveModal, private formBuilder: FormBuilder) { }

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
    this.unsubscribe$.complete();
    this.unsubscribe$.next();
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
      laps: [result.laps]
    }));
  }

  private patch(results: IRaceResult[]) {
    const control = this.resultsForm.get('grandprix.raceResults') as FormArray;
    control.clear();

    results.forEach(r => {
      control.push(this.formBuilder.group({
        position: [r.position],
        driverId: [r.driverId],
        time: [r.time],
        laps: [r.laps]
      }))
    });
  }
}
