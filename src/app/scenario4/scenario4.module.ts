import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Parent4Component } from './parent4/parent4.component';
import { Child4Component } from './child4/child4.component';

@NgModule({
  declarations: [Parent4Component, Child4Component],
  imports: [
    CommonModule
  ],
  exports: [Parent4Component, Child4Component]
})
export class Scenario4Module { }
