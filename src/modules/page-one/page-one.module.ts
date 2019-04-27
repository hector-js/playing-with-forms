import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageOneComponent } from './components/page-one/page-one.component';
import { PageOneRoutingModule } from './page-one-routing.module';
import { YesNoModule } from '../catalog/yes-no/yes-no.module';

@NgModule({
  imports: [
    CommonModule,
    PageOneRoutingModule
  ],
  declarations: [
    PageOneComponent
  ],
  exports: [
    PageOneComponent
  ]
})
export class PageOneModule { }
