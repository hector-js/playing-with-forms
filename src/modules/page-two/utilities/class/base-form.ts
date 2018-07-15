import { Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

export class BaseForm {

    form: FormGroup;
    @Output() eventForm: EventEmitter<FormGroup> = new EventEmitter<FormGroup>();

    sendEventsUp() {
        this.eventForm.emit(this.form);
        this.form.valueChanges.subscribe(() => {
            this.eventForm.emit(this.form);
        });
    }
}
