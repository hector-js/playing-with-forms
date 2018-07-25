import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageThreeComponent } from './components/page-three/page-three.component';
import { PageThreeRoutingModule } from './page-three-routing.module';
import { SelectorListComponent } from '../autocomplete/components/selector-list/selector-list.component';
import { AutocompleteModule } from '../autocomplete/autocomplete.module';

@NgModule({
  imports: [
    CommonModule,
    PageThreeRoutingModule,
    AutocompleteModule
  ],
  declarations: [
    PageThreeComponent,
  ],
  exports: [
    PageThreeComponent
  ]
})
export class PageThreeModule { }
