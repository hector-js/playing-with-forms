import { EventEmitter, OnDestroy, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Subscription } from 'rxjs';

export abstract class BaseForm implements OnDestroy {

    form: FormGroup;
    subscription: Subscription;

    @Output() validation: EventEmitter<boolean> = new EventEmitter<boolean>();

    sendEventsUp() {
        this.updateModel();
        this.emitValidation();
        this.subscription = this.form.valueChanges.subscribe(() => {
            this.updateModel();
            this.emitValidation();
        });
    }

    ngOnDestroy() {
        this.subscription.unsubscribe();
    }

    abstract emitValidation();
    abstract updateModel();
}
