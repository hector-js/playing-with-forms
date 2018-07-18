import { Component, EventEmitter, OnInit, Output, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { BaseForm } from '../../utilities/class/base-form';
@Component({
  selector: 'app-selector-list',
  templateUrl: './selector-list.component.html',
  styleUrls: ['./selector-list.component.css']
})
export class SelectorListComponent extends BaseForm implements OnInit {

  displayList: boolean;

  filter = undefined;

  cities = [
    { city: 'rome', displayCity: 'Rome' },
    { city: 'london', displayCity: 'London' },
    { city: 'madrid', displayCity: 'Madrid' },
    { city: 'paris', displayCity: 'Paris' },
    { city: 'lisboa', displayCity: 'Lisboa' },
    { city: 'ciudad de mexico', displayCity: 'Ciudad de Mexico' },

  ];


  constructor(public fb: FormBuilder) {
    super();
  }

  ngOnInit() {
    this.form = this.fb.group({
      autocomplete: ['', Validators.required]
    });
    this.sendEventsUp();
  }

  keyup(value) {
    this.displayList = true;
    this.filter = {city: value};
  }

  selectValue(value) {
    this.form.controls.autocomplete.setValue(value);
    this.displayList = false;
    this.filter = {city: value};
  }

  hideList() {
    this.displayList = false;
  }



  get autocomplete() { return this.form.get('selectivity'); }


}
