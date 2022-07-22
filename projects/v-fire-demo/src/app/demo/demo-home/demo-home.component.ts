import { Component, ComponentFactoryResolver, OnInit, ViewChild, ViewContainerRef } from '@angular/core';

@Component({
  selector: 'v-demo-home',
  templateUrl: './demo-home.component.html',
  styleUrls: ['./demo-home.component.css']
})
export class DemoHomeComponent implements OnInit {

  @ViewChild('container', { read: ViewContainerRef }) container:ViewContainerRef | undefined;

  constructor() { }

  ngOnInit(): void {
  }

  createComponent(componentName:any){
    this.container?.createComponent(componentName);
  }

}
