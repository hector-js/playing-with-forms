import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { BaseForm } from '../../../forms';
import { Name } from '../../utilities/model/name';


@Component({
  selector: 'app-name-input',
  templateUrl: './name-input.component.html',
  styleUrls: ['./name-input.component.css']
})
export class NameInputComponent extends BaseForm implements OnInit {

  @Input() model: Name;

  constructor(public fb: FormBuilder) {
    super();
  }

  ngOnInit() {
    this.form = this.fb.group({
      name: [this.model.name, Validators.required]
    });

    this.sendEventsUp();
  }

  emitValidation() {
    this.validation.emit(this.form.valid);
  }

  updateModel() {
    this.model.name = this.form.controls.name.value as string;
  }

  get name() { return this.form.get('name'); }

}
