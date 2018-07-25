import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { BaseForm } from '../../../forms';

@Component({
  selector: 'app-last-name-input',
  templateUrl: './last-name-input.component.html',
  styleUrls: ['./last-name-input.component.css']
})
export class LastNameInputComponent extends BaseForm implements OnInit {

  constructor(public fb: FormBuilder) {
    super();
  }

  ngOnInit() {
    this.form = this.fb.group({
      lastName: ['', Validators.required]
    });
    this.sendEventsUp();
  }

  get lastName() { return this.form.get('lastName'); }

}
