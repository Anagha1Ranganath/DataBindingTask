import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { Component1Component } from './task1/component1/component1.component';
import { Task1Module } from './task1/task1.module';
import { Task2Module } from './task2/task2.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    Task1Module,
    Task2Module
  ],
  exports: [
    Component1Component
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
