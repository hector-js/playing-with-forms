import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { YesNoComponent } from './yes-no.component';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, ReactiveFormsModule, AbstractControl } from '@angular/forms';
import { TestUtils } from '../../../../app/utils/test-utils';

@Component({
  template: `
            <form [formGroup]="form">
              <app-yes-no formControlName="yesNo"></app-yes-no>
            </form>`
})
class HostComponent implements OnInit {
  form: FormGroup;
  value: boolean;

  ngOnInit(): void {
    this.form = new FormBuilder().group({
      yesNo: this.value
    });
  }

  get yesNo(): AbstractControl { return this.form.get('yesNo'); }
}

fdescribe('YesNoComponent Host', () => {
  let component: HostComponent;
  let fixture: ComponentFixture<HostComponent>;
  let tu: TestUtils;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        HostComponent,
        YesNoComponent],
      imports: [
        ReactiveFormsModule
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HostComponent);
    component = fixture.componentInstance;
    tu = TestUtils.instance(fixture);
  });

  it('should create', () => {
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });

  describe('form', () => {
    describe('values', () => {
      describe('without default values', () => {
        beforeEach(() => fixture.detectChanges());
        it('should not select any value by default', () => {

          expect(component.yesNo.value).toBe(null);
        });

        it('should set the form to true when yes is click', () => {
          tu.clickQa('yes');
          fixture.detectChanges();

          expect(component.yesNo.value).toBeTruthy();
        });

        it('should set the form to false when No is click', () => {
          tu.clickQa('no');
          fixture.detectChanges();

          expect(component.yesNo.value).toBe(false);
        });
      });

      describe('with values', () => {
        fit('should display YES when is true', () => {
          component.value = true;

          fixture.detectChanges();

          expect(tu.byQa('yes').getAttribute('class')).toContain('yes-no-focus');
          expect(tu.byQa('no').getAttribute('class')).not.toContain('yes-no-focus');
        });

        fit('should display NO when is false', () => {
          component.value = false;

          fixture.detectChanges();

          expect(tu.byQa('no').getAttribute('class')).toContain('yes-no-focus');
          expect(tu.byQa('yes').getAttribute('class')).not.toContain('yes-no-focus');
        });
      });
    });

    describe('touched', () => {
      beforeEach(() => fixture.detectChanges());
      it('should not be touched by default', () => {
        expect(component.yesNo.touched).toBeFalsy();
      });

      it('should be touched when YES', () => {
        tu.clickQa('yes');
        fixture.detectChanges();

        expect(component.yesNo.touched).toBeTruthy();
      });

      it('should be touched when NO', () => {
        tu.clickQa('no');
        fixture.detectChanges();

        expect(component.yesNo.touched).toBeTruthy();
      });
    });
  });
});
