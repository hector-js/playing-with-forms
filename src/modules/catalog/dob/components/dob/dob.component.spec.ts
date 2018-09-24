import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DobComponent } from './dob.component';
import { Component, OnInit, forwardRef, NO_ERRORS_SCHEMA } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormsModule, ReactiveFormsModule, NG_VALUE_ACCESSOR } from '@angular/forms';

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

  ngOnInit() {
    this.form = this.fb.group({
      dobProperty: [['12', '11', '1988']]
    });
  }

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
    fixture.detectChanges();
  });

  describe('form', () => {

    it('should read and fill data by default', () => {
      expect(nativeElement.querySelector(byDataQa('day')).value).toBe(12);
      expect(nativeElement.querySelector(byDataQa('month')).value).toBe(11);
      expect(nativeElement.querySelector(byDataQa('year')).value).toBe(1988);
    });

    it('should change the form whenever there is a change in the day', () => {
      keyupValueByDataQa('day', 'keyup', 1);

      expect(dobPropertyValue()[0]).toBe(1);
      expect(dobPropertyValue()[1]).toBe(11);
      expect(dobPropertyValue()[2]).toBe(1988);
    });

    it('should change the form whenever there is a change in the month', () => {
      keyupValueByDataQa('month', 'keyup', 12);

      expect(dobPropertyValue()[0]).toBe(12);
      expect(dobPropertyValue()[1]).toBe(12);
      expect(dobPropertyValue()[2]).toBe(1988);
    });

    it('should change the form whenever there is a change in the year', () => {
      keyupValueByDataQa('year', 'keyup', 1999);

      expect(dobPropertyValue()[0]).toBe(12);
      expect(dobPropertyValue()[1]).toBe(11);
      expect(dobPropertyValue()[2]).toBe(1999);
    });
  });

  describe('form methods', () => {

    describe('touched status', () => {
      it('should be false by default', () => {
        expect(component.form.controls.dobProperty.touched).toBeFalsy();
      });

      it('should throw an event when day is touched', () => {
        keyupValueByDataQa('day', 'blur');

        expect(component.form.controls.dobProperty.touched).toBeTruthy();
      });

      it('should throw an event when month is touched', () => {
        keyupValueByDataQa('month', 'blur');

        expect(component.form.controls.dobProperty.touched).toBeTruthy();
      });

      it('should throw an event when year is touched', () => {
        keyupValueByDataQa('year', 'blur');

        expect(component.form.controls.dobProperty.touched).toBeTruthy();
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

    it('should add error class whenever day is wrong format', () => {
      keyupValueByDataQa('day', 'keyup', 32);

      expect(nativeElement.querySelector(byDataQa('day')).getAttribute('class')).toContain('error');
    });

    it('should add error class whenever month is wrong format', () => {
      keyupValueByDataQa('month', 'keyup', 13);

      expect(nativeElement.querySelector(byDataQa('month')).getAttribute('class')).toContain('error');
    });

    it('should add error class whenever year is wrong format', () => {
      keyupValueByDataQa('year', 'keyup', 19999);

      expect(nativeElement.querySelector(byDataQa('year')).getAttribute('class')).toContain('error');
    });

    describe('max length', () => {

      it('should not allow to type more than 31  day', () => {
        expect(nativeElement.querySelector(byDataQa('day')).getAttribute('max')).toBe(31);
      });

      it('should not allow to type less than 1  day', () => {
        expect(nativeElement.querySelector(byDataQa('day')).getAttribute('min')).toBe(1);
      });

      it('should not allow to type more than 12 months', () => {
        expect(nativeElement.querySelector(byDataQa('month')).getAttribute('max')).toBe(12);
      });

      it('should not allow to type less than 1  month', () => {
        expect(nativeElement.querySelector(byDataQa('month')).getAttribute('min')).toBe(1);
      });

      it('should not allow to type more than 9999 characters for year', () => {
        expect(nativeElement.querySelector(byDataQa('year')).getAttribute('max')).toBe(9999);
      });

      it('should not allow to type less than 1  year', () => {
        expect(nativeElement.querySelector(byDataQa('year')).getAttribute('min')).toBe(1);
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

});
