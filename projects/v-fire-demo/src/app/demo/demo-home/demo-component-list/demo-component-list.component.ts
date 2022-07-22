import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { DEMOABLE_COMPONENTS } from '../../../demoable-componenet-list';

@Component({
  selector: 'demo-component-list',
  templateUrl: './demo-component-list.component.html',
  styleUrls: ['./demo-component-list.component.css']
})
export class DemoComponentListComponent implements OnInit {
  compList=DEMOABLE_COMPONENTS;
  @Output() loadComponent:EventEmitter<any>=new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  emitData(component:any):void{
    this.loadComponent.emit(component);
  }

}
