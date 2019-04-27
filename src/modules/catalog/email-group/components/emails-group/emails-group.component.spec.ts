import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmailsGroupComponent } from './emails-group.component';
import { FormGroup, FormBuilder } from '@angular/forms';
import { OnInit, Component } from '@angular/core';

@Component({
  template:
    `<form [formGroup]="form">
      <app-emails-group data-qa="dobContainer" formControlName="emailsProperty"></app-emails-group>
    </form>`,
})
export class WrapperComponent implements OnInit {

  constructor(public fb: FormBuilder) {
  }

  form: FormGroup;
  initialize = ['valid@email.com', 'vakid@email.com'];

  ngOnInit() {
    this.form = this.fb.group({
      emailsProperty: [this.initialize]
    });
  }

  get emailsProperty() { return this.form.get('emailsProperty'); }

}

describe('EmailsGroupComponent', () => {
  let component: WrapperComponent;
  let fixture: ComponentFixture<WrapperComponent>;
  let nativeElement: HTMLElement;

  const byDataQa = (val: string): string => {
    return '[data-qa"' + val + '"]';
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmailsGroupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WrapperComponent);
    component = fixture.componentInstance;
    nativeElement = fixture.nativeElement;
    fixture.detectChanges();
  });

  describe('emails group structure', () => {

    it('should contain email input', () => {
      expect(nativeElement.querySelector(byDataQa('email'))).toBeTruthy();
    });

    it('should contain confirm input', () => {
      expect(nativeElement.querySelector(byDataQa('confirm'))).toBeTruthy();
    });

  });
});
