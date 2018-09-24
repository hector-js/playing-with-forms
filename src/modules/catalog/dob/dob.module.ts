import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DobComponent } from './components/dob/dob.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    DobComponent
  ],
  exports: [
    DobComponent
  ]
})
export class DobModule { }
