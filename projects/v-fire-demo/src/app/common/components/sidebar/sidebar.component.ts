import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'demo-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  @Output() loadComponent:EventEmitter<any>=new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  emitData(component:any):void{
    this.loadComponent.emit(component);
  }

}
