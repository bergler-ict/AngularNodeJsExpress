import { Component, OnInit } from '@angular/core';
import { OverviewComponentBase } from 'src/app/core/overview-component-base';
import { CircuitsService } from '../circuits.service';
import { ICircuit } from '../../core/models/circuit.interface';
import { CircuitEditorComponent } from '../circuit-editor/circuit-editor.component';
import { takeUntil } from 'rxjs/operators';
import { DefaultTypes } from 'src/app/core/default-types.enum';

@Component({
  selector: 'fom-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss']
})
export class OverviewComponent extends OverviewComponentBase<ICircuit> implements OnInit {
  messageService: any;

  constructor(public circuitsService: CircuitsService) {
      super(circuitsService, CircuitEditorComponent, DefaultTypes.Circuit);
    }

  ngOnInit(): void {
    this.circuitsService.loadAll()
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe(circuits => this.circuitsService.items$.next(circuits));
  }
}
