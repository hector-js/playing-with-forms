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


fdescribe('DobComponent', () => {
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

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        ReactiveFormsModule
      ],
      declarations: [DobComponent, WrapperComponent],
      schemas: [ NO_ERRORS_SCHEMA ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WrapperComponent);
    component = fixture.componentInstance;
    nativeElement = fixture.nativeElement;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
    // simulateEvent(nativeElement.querySelector(byDataQa('dobContainer')), 'blur');
    console.log('expectDay: ', nativeElement.querySelector(byDataQa('day')).innerHTML);
    expect(nativeElement.querySelector(byDataQa('day')).value).toBe('12');
    expect(nativeElement.querySelector(byDataQa('month')).value).toBe('11');
    expect(nativeElement.querySelector(byDataQa('year')).value).toBe('1988');
  });


});
