import { Component, OnInit } from '@angular/core';
import { dropdownDetails } from 'v-fire-lib';

@Component({
  selector: 'form-builder-demo',
  templateUrl: './form-builder-demo.component.html',
  styleUrls: ['./form-builder-demo.component.css']
})
export class FormBuilderDemoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  static getDetails(){
    return dropdownDetails;
  }

}
