import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { LastName } from '../../utilities/model/last-name';
import { BaseForm } from '../../../forms';

@Component({
  selector: 'app-last-name-input',
  templateUrl: './last-name-input.component.html',
  styleUrls: ['./last-name-input.component.css']
})
export class LastNameInputComponent extends BaseForm implements OnInit {

  @Input() model: LastName;

  constructor(public fb: FormBuilder) {
    super();
  }

  ngOnInit() {
    this.form = this.fb.group({
      lastName: [this.model.lastName, Validators.required]
    });
    this.sendEventsUp();
  }

  emitValidation() {
    this.validation.emit(this.form.valid);
  }

  updateModel() {
    this.model.lastName = this.form.controls.lastName.value as string;
  }

  get lastName() { return this.form.get('lastName'); }

}
