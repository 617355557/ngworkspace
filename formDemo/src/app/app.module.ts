import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormControlDemoComponent } from './form-control-demo/form-control-demo.component';
import { FormBuilderDemoComponent } from './form-builder-demo/form-builder-demo.component';
import { TestNgFormComponent } from './test-ng-form/test-ng-form.component';


@NgModule({
  declarations: [
    AppComponent,
    FormControlDemoComponent,
    FormBuilderDemoComponent,
    TestNgFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule, // <-- add this
    ReactiveFormsModule, // <-- add this
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [TestNgFormComponent]
})
export class AppModule { }
