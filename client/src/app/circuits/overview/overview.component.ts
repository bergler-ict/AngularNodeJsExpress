import { Component, OnInit } from '@angular/core';
import { ComponentBase } from 'src/app/core/component-base';

@Component({
  selector: 'fom-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss']
})
export class OverviewComponent extends ComponentBase implements OnInit {

  constructor() { super(); }

  ngOnInit(): void {
  }

}
