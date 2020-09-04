import { Component, OnInit } from '@angular/core';
import { ICircuit } from '../../core/models/circuit.interface';
import { CountryService } from 'src/app/core/services/country.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { takeUntil } from 'rxjs/operators';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { EditorComponentBase } from 'src/app/core/editor-component-base';

@Component({
  selector: 'fom-circuit-editor',
  templateUrl: './circuit-editor.component.html',
  styleUrls: ['./circuit-editor.component.scss']
})
export class CircuitEditorComponent extends EditorComponentBase<ICircuit> implements OnInit {
  circuitFormgroup: FormGroup;

  constructor(public countryService: CountryService, private formBuilder: FormBuilder, public modal: NgbActiveModal) {
    super();
   }

  ngOnInit(): void {
    this.countryService.loadSelectItems()
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe(items => this.countryService.selectItems$.next(items));

    this.item$.pipe(takeUntil(this.unsubscribe$)).subscribe(circuit => {
      this.circuitFormgroup = this.formBuilder.group({
        id: [circuit.id],
        name: [circuit.name, Validators.required],
        length: [circuit.length],
        lapRecord: [circuit.lapRecord],
        countryId: [circuit.countryId]
      });
    });
  }
}
