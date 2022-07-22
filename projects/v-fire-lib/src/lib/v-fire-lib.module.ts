import { NgModule } from '@angular/core';
import { VFireLibComponent } from './v-fire-lib.component';
import { FormBuilderComponent } from './form-builder/form-builder.component';
import { DropdownComponent } from './dropdown/dropdown.component';



@NgModule({
  declarations: [
    VFireLibComponent,
    FormBuilderComponent,
    DropdownComponent
  ],
  imports: [
  ],
  exports: [
    VFireLibComponent,
    FormBuilderComponent
  ]
})
export class VFireLibModule { }
