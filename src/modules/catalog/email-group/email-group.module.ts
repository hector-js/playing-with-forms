import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmailsGroupComponent } from './components/emails-group/emails-group.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    EmailsGroupComponent
  ],
  exports: [
    EmailsGroupComponent
  ]
})
export class EmailGroupModule { }
