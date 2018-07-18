import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

import { BaseForm } from '../../utilities/class/base-form';

@Component({
  selector: 'app-name-input',
  templateUrl: './name-input.component.html',
  styleUrls: ['./name-input.component.css']
})
export class NameInputComponent extends BaseForm implements OnInit {

  constructor(public fb: FormBuilder) {
    super();
  }

  ngOnInit() {
    this.form = this.fb.group({
      name: ['', Validators.required]
    });
    this.sendEventsUp();
  }

  get name() { return this.form.get('name'); }

}
