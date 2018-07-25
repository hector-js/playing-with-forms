import { FormArray, FormBuilder, FormGroup } from '@angular/forms';

export class BaseParentForm {

    formArray: FormArray;

    constructor(public fb: FormBuilder) {
        this.formArray = this.fb.array([]);
    }

    getForm(event: FormGroup) {
        this.formArray.push(event);
    }
}
