import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

import { BaseForm } from '../../../forms';
import { Emails } from '../../utilities/model/emails';


@Component({
  selector: 'app-email-input',
  templateUrl: './email-input.component.html',
  styleUrls: ['./email-input.component.css']
})
export class EmailInputComponent extends BaseForm implements OnInit {

  @Input() model: Emails;

  constructor(public fb: FormBuilder) {
    super();
  }

  ngOnInit() {
    this.form = this.fb.group({
      email: [this.model.email, Validators.required],
      confirmEmail: [this.model.confirm, Validators.required]
    });
    this.sendEventsUp();
  }

  emitValidation() {
    this.validation.emit(this.form.valid);
  }

  updateModel() {
    this.model.email = this.form.controls.email.value as string;
    this.model.confirm = this.form.controls.confirmEmail.value as string;
  }


  get email() { return this.form.get('email'); }
  get confirmEmail() { return this.form.get('confirmEmail'); }

}
