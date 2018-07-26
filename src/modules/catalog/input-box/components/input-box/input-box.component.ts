import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, Validators, FormControl } from '@angular/forms';
import { BaseForm } from '../../../../forms';


@Component({
  selector: 'app-input-box',
  templateUrl: './input-box.component.html',
  styleUrls: ['./input-box.component.css']
})
export class InputBoxComponent extends BaseForm implements OnInit {

  @Input() model;
  @Input() dataName: string;

  constructor(public fb: FormBuilder) {
    super();
  }

  ngOnInit() {
    this.form = this.fb.group({
      controlName: [this.model[this.dataName], Validators.required]
    });

    this.sendEventsUp();
  }

  emitValidation() {
    this.validation.emit(this.form.valid);
  }

  updateModel() {
    this.model[this.dataName] = this.form.controls.controlName.value as string;
  }

  get control() { return this.form.get('controlName'); }
}
