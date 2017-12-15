import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {AppRoutingModule} from "./app-routing.module";
import {NgZorroAntdModule} from "ng-zorro-antd";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    // NgZorroAntdModule.forRoot(),
    AppRoutingModule
],
providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
