import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DisplayNavComponent } from './components/display-nav/display-nav.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    DisplayNavComponent
  ],
  exports: [
    DisplayNavComponent
  ]
})
export class DisplayNavModule { }
