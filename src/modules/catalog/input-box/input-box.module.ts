import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { InputBoxComponent } from './components/input-box/input-box.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
  ],
  declarations: [
    InputBoxComponent
  ],
  exports: [
    InputBoxComponent
  ]
})
export class InputBoxModule { }
