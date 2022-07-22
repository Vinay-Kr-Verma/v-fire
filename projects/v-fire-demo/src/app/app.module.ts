import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { DemoHomeComponent } from './demo/demo-home/demo-home.component';
import { HeaderComponent } from './common/components/header/header.component';
import { SidebarComponent } from './common/components/sidebar/sidebar.component';
import { FormBuilderDemoComponent } from './demo/components/form-builder-demo/form-builder-demo.component';
import { DemoComponentListComponent } from './demo/demo-home/demo-component-list/demo-component-list.component';

@NgModule({
  declarations: [
    DemoHomeComponent,
    HeaderComponent,
    SidebarComponent,
    FormBuilderDemoComponent,
    DemoComponentListComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [DemoHomeComponent]
})
export class AppModule { }
