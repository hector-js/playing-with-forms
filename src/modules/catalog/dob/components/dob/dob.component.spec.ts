import { Component, NO_ERRORS_SCHEMA, OnInit } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';

import { DobComponent } from './dob.component';

@Component({
  selector: 'app-wrapper',
  template:
    `<form [formGroup]="form">
      <app-dob data-qa="dobContainer" formControlName="dobProperty"></app-dob>
    </form>`,
})
export class WrapperComponent implements OnInit {

  constructor(public fb: FormBuilder) {
  }

  form: FormGroup;
  initialize = ['12', '11', '1988'];

  ngOnInit() {
    this.form = this.fb.group({
      dobProperty: [this.initialize]
    });
  }

  get dobProperty() { return this.form.get('dobProperty'); }

}

describe('DobComponent', () => {
  let component: WrapperComponent;
  let fixture: ComponentFixture<WrapperComponent>;
  let nativeElement: any;

  const byDataQa = (value) => {
    return '[data-qa="' + value + '"]';
  };

  const simulateEvent = (element, eventType) => {
    const event = document.createEvent('Events');
    event.initEvent(eventType, true, false);
    element.dispatchEvent(event);
  };

  const keyupValueByDataQa = (dataQaValue: string, event: string, value?: number) => {
    const element = nativeElement.querySelector(byDataQa(dataQaValue));
    if (value) { element.value = value; }
    simulateEvent(element, event);
    fixture.detectChanges();
  };

  const dobPropertyValue = () => component.form.controls.dobProperty.value;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        ReactiveFormsModule
      ],
      declarations: [DobComponent, WrapperComponent],
      schemas: [NO_ERRORS_SCHEMA]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WrapperComponent);
    component = fixture.componentInstance;
    nativeElement = fixture.nativeElement;
  });

  describe('form', () => {

    beforeEach(() => {
      fixture.detectChanges();
    });

    it('should read and fill data by default', () => {
      expect(nativeElement.querySelector(byDataQa('day')).value).toBe('12');
      expect(nativeElement.querySelector(byDataQa('month')).value).toBe('11');
      expect(nativeElement.querySelector(byDataQa('year')).value).toBe('1988');
    });

    it('should change the form whenever there is a change in the day', () => {
      keyupValueByDataQa('day', 'keyup', 1);

      expect(dobPropertyValue()[0]).toBe('1');
      expect(dobPropertyValue()[1]).toBe('11');
      expect(dobPropertyValue()[2]).toBe('1988');
    });

    it('should change the form whenever there is a change in the month', () => {
      keyupValueByDataQa('month', 'keyup', 12);

      expect(dobPropertyValue()[0]).toBe('12');
      expect(dobPropertyValue()[1]).toBe('12');
      expect(dobPropertyValue()[2]).toBe('1988');
    });

    it('should change the form whenever there is a change in the year', () => {
      keyupValueByDataQa('year', 'keyup', 1999);

      expect(dobPropertyValue()[0]).toBe('12');
      expect(dobPropertyValue()[1]).toBe('11');
      expect(dobPropertyValue()[2]).toBe('1999');
    });
  });

  describe('form methods', () => {

    beforeEach(() => {
      fixture.detectChanges();
    });

    describe('touched status', () => {

      it('should be false by default', () => {
        expect(component.form.controls.dobProperty.touched).toBeFalsy();
      });

      describe('blur', () => {

        it('should be false when day has been touched but not month and year', () => {
          keyupValueByDataQa('day', 'blur');

          expect(component.form.controls.dobProperty.touched).toBeFalsy();
        });


      it('should be false when month has been touched but not day and year', () => {
          keyupValueByDataQa('month', 'blur');

          expect(component.form.controls.dobProperty.touched).toBeFalsy();
        });

        it('should be false when year has been touched but not month and day', () => {
          keyupValueByDataQa('year', 'blur');

          expect(component.form.controls.dobProperty.touched).toBeFalsy();
        });

        it('should be true when day, month and year have been touched', () => {
          keyupValueByDataQa('day', 'blur');
          keyupValueByDataQa('month', 'blur');
          keyupValueByDataQa('year', 'blur');

          expect(component.form.controls.dobProperty.touched).toBeTruthy();
        });
      });

      describe('keyup', () => {
        it('should be false when day has been touched but not month and year', () => {
          keyupValueByDataQa('day', 'keyup');

          expect(component.form.controls.dobProperty.touched).toBeFalsy();
        });

        it('should be false when month has been touched but not day and year', () => {
          keyupValueByDataQa('month', 'keyup');

          expect(component.form.controls.dobProperty.touched).toBeFalsy();
        });

        it('should be false when year has been touched but not month and day', () => {
          keyupValueByDataQa('year', 'keyup');

          expect(component.form.controls.dobProperty.touched).toBeFalsy();
        });

        it('should be true when day, month and year have been touched', () => {
          keyupValueByDataQa('day', 'keyup');
          keyupValueByDataQa('month', 'keyup');
          keyupValueByDataQa('year', 'keyup');

          expect(component.form.controls.dobProperty.touched).toBeTruthy();
        });
      });

    });

    describe('dirty status', () => {
      it('should be false when user has not interacted with the control', () => {
        expect(component.form.controls.dobProperty.dirty).toBeFalsy();
      });

      it('should be activated when user has already interacted with day', () => {
        keyupValueByDataQa('day', 'keyup', 1);

        expect(component.form.controls.dobProperty.dirty).toBeTruthy();
      });

      it('should be activated when user has already interacted with month', () => {
        keyupValueByDataQa('month', 'keyup', 11);

        expect(component.form.controls.dobProperty.dirty).toBeTruthy();
      });

      it('should be activated when user has already interacted with year', () => {
        keyupValueByDataQa('year', 'keyup', 1988);

        expect(component.form.controls.dobProperty.dirty).toBeTruthy();
      });
    });

    describe('pristine status', () => {
      it('should be acivated when user has not interacted with the control yet', () => {
        expect(component.form.controls.dobProperty.pristine).toBeTruthy();
      });

      it('should be false when user has interacted with the day', () => {
        keyupValueByDataQa('day', 'keyup', 1);

        expect(component.form.controls.dobProperty.pristine).toBeFalsy();
      });

      it('should be false when user has interacted with the month', () => {
        keyupValueByDataQa('month', 'keyup', 11);

        expect(component.form.controls.dobProperty.pristine).toBeFalsy();
      });

      it('should be false when user has interacted with the year', () => {
        keyupValueByDataQa('year', 'keyup', 1988);

        expect(component.form.controls.dobProperty.pristine).toBeFalsy();
      });
    });

  });

  describe('validation', () => {

    beforeEach(() => {
      fixture.detectChanges();
    });

    it('should not have any error in the form by default', () => {
      expect(component.dobProperty.errors).toBeNull();
      expect(component.dobProperty.valid).toBeTruthy();
    });

    it('should have a dayFormat error when day is invalid', () => {
      keyupValueByDataQa('day', 'keyup', 32);
      keyupValueByDataQa('month', 'blur', 12);
      keyupValueByDataQa('year', 'blur', 1988);

      expect(component.dobProperty.errors.dayFormat).toBeTruthy();
      expect(component.dobProperty.invalid).toBeTruthy();
    });

    it('should have a monthFormat error when month is invalid', () => {
      keyupValueByDataQa('day', 'blur', 30);
      keyupValueByDataQa('month', 'keyup', 13);
      keyupValueByDataQa('year', 'blur', 1988);

      expect(component.dobProperty.errors.monthFormat).toBeTruthy();
      expect(component.dobProperty.invalid).toBeTruthy();
    });

    it('should have a yearFormat error when year is invalid', () => {
      keyupValueByDataQa('day', 'blur', 30);
      keyupValueByDataQa('month', 'blur', 12);
      keyupValueByDataQa('year', 'keyup', 19999);

      expect(component.dobProperty.errors.yearFormat).toBeTruthy();
      expect(component.dobProperty.invalid).toBeTruthy();
    });

    it('should have invalidDate error class when invalid date', () => {
      keyupValueByDataQa('day', 'blur', 35);
      keyupValueByDataQa('month', 'blur', 12);
      keyupValueByDataQa('year', 'keyup', 19999);

      expect(component.dobProperty.errors.invalidDate).toBeTruthy();
      expect(component.dobProperty.invalid).toBeTruthy();
    });

    it('should allow leap years', () => {
      keyupValueByDataQa('day', 'blur', 29);
      keyupValueByDataQa('month', 'blur', 2);
      keyupValueByDataQa('year', 'keyup', 1988);

      expect(component.dobProperty.errors).toBeNull();
      expect(component.dobProperty.valid).toBeTruthy();
    });

    describe('max length', () => {

      it('should not allow to type more than 31  day', () => {
        expect(nativeElement.querySelector(byDataQa('day')).getAttribute('max')).toBe('31');
      });

      it('should not allow to type less than 1  day', () => {
        expect(nativeElement.querySelector(byDataQa('day')).getAttribute('min')).toBe('1');
      });

      it('should not allow to type more than 12 months', () => {
        expect(nativeElement.querySelector(byDataQa('month')).getAttribute('max')).toBe('12');
      });

      it('should not allow to type less than 1  month', () => {
        expect(nativeElement.querySelector(byDataQa('month')).getAttribute('min')).toBe('1');
      });

      it('should not allow to type more than 9999 characters for year', () => {
        expect(nativeElement.querySelector(byDataQa('year')).getAttribute('max')).toBe('9999');
      });

      it('should not allow to type less than 1  year', () => {
        expect(nativeElement.querySelector(byDataQa('year')).getAttribute('min')).toBe('1');
      });

    });

    describe('type', () => {

      it('should allow just numbers for day', () => {
        expect(nativeElement.querySelector(byDataQa('day')).getAttribute('type')).toBe('number');
      });

      it('should allow just numbers for month', () => {
        expect(nativeElement.querySelector(byDataQa('month')).getAttribute('type')).toBe('number');
      });

      it('should allow just numbers for year', () => {
        expect(nativeElement.querySelector(byDataQa('year')).getAttribute('type')).toBe('number');
      });
    });

  });

  describe('border color when there is an error', () => {

    const expectErrorClass = () => {
      expect(nativeElement.querySelector(byDataQa('day')).getAttribute('class')).toBe('center error');
      expect(nativeElement.querySelector(byDataQa('month')).getAttribute('class')).toBe('center error');
      expect(nativeElement.querySelector(byDataQa('year')).getAttribute('class')).toBe('center error');
    };

    beforeEach(() => {
      component.initialize = ['', '', ''];
      component.ngOnInit();
      fixture.detectChanges();
    });

    it('should not have any error color by default', () => {
      expect(nativeElement.querySelector(byDataQa('day')).getAttribute('class')).toBe('center');
      expect(nativeElement.querySelector(byDataQa('month')).getAttribute('class')).toBe('center');
      expect(nativeElement.querySelector(byDataQa('year')).getAttribute('class')).toBe('center');
    });

    it('should add error class when day is wrong format', () => {
      keyupValueByDataQa('day', 'keyup', 32);
      keyupValueByDataQa('month', 'blur', 12);
      keyupValueByDataQa('year', 'blur', 1988);

      expectErrorClass();
    });

    it('should add error class when month is wrong format', () => {
      keyupValueByDataQa('day', 'blur', 30);
      keyupValueByDataQa('month', 'keyup', 13);
      keyupValueByDataQa('year', 'blur', 1988);

      expectErrorClass();
    });

    it('should add error class when year is wrong format', () => {
      keyupValueByDataQa('day', 'blur', 30);
      keyupValueByDataQa('month', 'blur', 12);
      keyupValueByDataQa('year', 'keyup', 19999);

      expectErrorClass();
    });

    it('should add error class when invalid date', () => {
      keyupValueByDataQa('day', 'blur', 35);
      keyupValueByDataQa('month', 'blur', 12);
      keyupValueByDataQa('year', 'keyup', 19999);

      expectErrorClass();
    });

    it('should add error class when leap year error happens', () => {
      keyupValueByDataQa('day', 'blur', 30);
      keyupValueByDataQa('month', 'blur', 2);
      keyupValueByDataQa('year', 'keyup', 1988);

      expectErrorClass();
    });
  });

});
