import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { BehaviorSubject } from 'rxjs';
import { IGrandPrix, DefaultGrandPrix } from '../models/grandprix.interface';
import { ComponentBase } from 'src/app/core/component-base';
import { takeUntil } from 'rxjs/operators';
import { CircuitsService } from 'src/app/circuits/circuits.service';

@Component({
  selector: 'fom-grandprix-editor',
  templateUrl: './grandprix-editor.component.html',
  styleUrls: ['./grandprix-editor.component.scss']
})
export class GrandprixEditorComponent extends ComponentBase implements OnInit {
  grandprix$ = new BehaviorSubject<IGrandPrix>(DefaultGrandPrix);

  grandprixFormgroup: FormGroup;

  constructor(public modal: NgbActiveModal,
    private formBuilder: FormBuilder, public circuitsService: CircuitsService) { super() }

  ngOnInit(): void {
    this.circuitsService.getCircuitSelectItems();
    this.grandprix$.pipe(takeUntil(this.unsubscribe$)).subscribe(grandprix => {
      if(grandprix) {
        this.grandprixFormgroup = this.formBuilder.group({
          id: [grandprix.id],
          name: [grandprix.name],
          date: [this.fromJsonDate(grandprix.date)],
          year: [new Date(grandprix.date).getFullYear()],
          circuitId: [grandprix.circuitId]
        });
      }
    });
  }

  fromJsonDate(jDate): string {
    const bDate: Date = new Date(jDate);
    return bDate.toISOString().substring(0, 10);
  }
}
