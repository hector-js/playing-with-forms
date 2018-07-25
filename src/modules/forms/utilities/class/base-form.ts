import { EventEmitter, OnDestroy, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Subscription } from 'rxjs';

export class BaseForm implements OnDestroy {

    form: FormGroup;
    subscription: Subscription;

    @Output() eventForm: EventEmitter<FormGroup> = new EventEmitter<FormGroup>();

    sendEventsUp() {
        this.eventForm.emit(this.form);
        this.subscription = this.form.valueChanges.subscribe(() => {
            this.eventForm.emit(this.form);
        });
    }

    ngOnDestroy() {
        this.subscription.unsubscribe();
    }
}
