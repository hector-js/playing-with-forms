import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { YesNoComponent } from './components/yes-no.component';

@NgModule({
  declarations: [
    YesNoComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    YesNoComponent
  ]
})
export class YesNoModule { }
