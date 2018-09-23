import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AutocompleteModule } from '../catalog/autocomplete/autocomplete.module';
import { DisplayNavModule } from '../catalog/display-nav/display-nav.module';
import { InputBoxModule } from '../catalog/input-box/input-box.module';
import { EmailInputComponent } from './components/email-input/email-input.component';
import { LastNameInputComponent } from './components/last-name-input/last-name-input.component';
import { PageTwoComponent } from './components/page-two/page-two.component';
import { PageTwoRoutingModule } from './page-two-routing.module';

@NgModule({
  imports: [
    CommonModule,
    PageTwoRoutingModule,
    ReactiveFormsModule,
    AutocompleteModule,
    InputBoxModule,
    DisplayNavModule
  ],
  declarations: [
    PageTwoComponent,
    LastNameInputComponent,
    EmailInputComponent
  ],
  exports: [
    PageTwoComponent
  ]
})
export class PageTwoModule { }
