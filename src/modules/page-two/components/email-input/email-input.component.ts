import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { BaseForm } from '../../utilities/class/base-form';


@Component({
  selector: 'app-email-input',
  templateUrl: './email-input.component.html',
  styleUrls: ['./email-input.component.css']
})
export class EmailInputComponent extends BaseForm implements OnInit {

  constructor(public fb: FormBuilder) { 
    super();
  }

  ngOnInit() {
    this.form = this.fb.group({
      email: ['', Validators.required],
      confirmEmail: ['', Validators.required]
    });
    this.sendEventsUp();
  }

  get email() { return this.form.get('email'); }
  get confirmEmail() { return this.form.get('confirmEmail'); }

}
