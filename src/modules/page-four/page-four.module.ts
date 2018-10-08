import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageFourComponent } from './components/page-four/page-four.component';
import { PageFourRoutingModule } from './page-four-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { DobModule } from '../catalog/dob/dob.module';
import { EmailGroupModule } from '../catalog/email-group/email-group.module';

@NgModule({
  imports: [
    PageFourRoutingModule,
    DobModule,
    EmailGroupModule,
    ReactiveFormsModule,
    CommonModule
  ],
  declarations: [
    PageFourComponent
  ],
  exports: [
    PageFourComponent
  ]
})
export class PageFourModule { }
