import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Filter } from './pipes/autocomplete/filter.pipe';
import { SelectorListComponent } from './components/selector-list/selector-list.component';
import { SelectorDirective } from './directives/selector.directive';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  declarations: [
    Filter,
    SelectorListComponent,
    SelectorDirective
  ],
  exports: [
    SelectorListComponent
  ]
})
export class AutocompleteModule { }
