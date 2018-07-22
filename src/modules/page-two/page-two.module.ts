import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { EmailInputComponent } from './components/email-input/email-input.component';
import { LastNameInputComponent } from './components/last-name-input/last-name-input.component';
import { NameInputComponent } from './components/name-input/name-input.component';
import { PageTwoComponent } from './components/page-two/page-two.component';
import { PageTwoRoutingModule } from './page-two-routing.module';
import { AutocompleteModule } from '../autocomplete/autocomplete.module';

@NgModule({
  imports: [
    CommonModule,
    PageTwoRoutingModule,
    ReactiveFormsModule,
    AutocompleteModule
  ],
  declarations: [
    PageTwoComponent,
    NameInputComponent,
    LastNameInputComponent,
    EmailInputComponent
  ],
  exports: [
    PageTwoComponent
  ]
})
export class PageTwoModule { }
