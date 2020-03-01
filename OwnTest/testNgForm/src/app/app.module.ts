import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { Form1Component } from './form1/form1.component';
import { Builder1Component } from './builder1/builder1.component';
import { Builer2Component } from './builer2/builer2.component';

@NgModule({
  declarations: [
    AppComponent,
    Form1Component,
    Builder1Component,
    Builer2Component
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [Builer2Component]
})
export class AppModule { }
