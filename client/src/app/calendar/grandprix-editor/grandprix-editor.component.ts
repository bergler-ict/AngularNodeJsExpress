import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { BehaviorSubject } from 'rxjs';
import { IGrandPrix, DefaultGrandPrix } from '../../core/models/grandprix.interface';
import { takeUntil } from 'rxjs/operators';
import { CircuitsService } from 'src/app/circuits/circuits.service';
import { EditorComponentBase } from 'src/app/core/editor-component-base';

@Component({
  selector: 'fom-grandprix-editor',
  templateUrl: './grandprix-editor.component.html',
  styleUrls: ['./grandprix-editor.component.scss']
})
export class GrandprixEditorComponent extends EditorComponentBase<IGrandPrix> implements OnInit {
  grandprixFormgroup: FormGroup;

  constructor(public modal: NgbActiveModal,
    private formBuilder: FormBuilder, public circuitsService: CircuitsService) { super() }

  ngOnInit(): void {
    this.circuitsService.loadSelectItems()
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe(items => this.circuitsService.selectItems$.next(items));

    this.item$.pipe(takeUntil(this.unsubscribe$)).subscribe(grandprix => {
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
