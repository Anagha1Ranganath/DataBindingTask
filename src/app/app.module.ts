import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { Component1Component } from './task1/component1/component1.component';
import { Task1Module } from './task1/task1.module';
import { Task2Module } from './task2/task2.module';
import { Scenario3Module } from './scenario3/scenario3.module';
import { Scenario4Module } from './scenario4/scenario4.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    Task1Module,
    Task2Module,
    Scenario3Module,
    Scenario4Module
  ],
  exports: [
    Component1Component
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
