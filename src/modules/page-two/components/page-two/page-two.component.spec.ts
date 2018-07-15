import { async, ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';

import { PageTwoComponent } from './page-two.component';
import { ReactiveFormsModule, FormGroup } from '@angular/forms';


fdescribe('PageTwoComponent', () => {
  let component: PageTwoComponent;
  let fixture: ComponentFixture<PageTwoComponent>;
  let nativeElement: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageTwoComponent ],
      imports: [
        ReactiveFormsModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageTwoComponent);
    component = fixture.componentInstance;
    nativeElement = fixture.nativeElement;
    fixture.detectChanges();
  });

  it('should contains element with proper data', () => {
    expect(nativeElement.querySelector(byDataQa('personal-details-legend')).textContent).toBe('PERSONAL DETAILS');
  });

  it('should contains a form', () => {
    expect(component.detailsForm instanceof FormGroup).toBeTruthy();
    expect(component.detailsForm.controls.name).toBeTruthy();
    expect(component.detailsForm.controls.lastName).toBeTruthy();
    expect(component.detailsForm.controls.email).toBeTruthy();
    expect(component.detailsForm.controls.confirmEmail).toBeTruthy();
  });

  it('should updates name in the form when we add some values', () => {
    component.detailsForm.controls.name.setValue('James');
    component.detailsForm.controls.lastName.setValue('Smith');
    component.detailsForm.controls.email.setValue('email@email.com');
    component.detailsForm.controls.confirmEmail.setValue('email@email.com');

    fixture.detectChanges();

    const nameElement: HTMLInputElement = nativeElement.querySelector(byDataQa('name'));
    const lastNameElement: HTMLInputElement = nativeElement.querySelector(byDataQa('lastName'));
    const emailElement: HTMLInputElement = nativeElement.querySelector(byDataQa('email'));
    const confirmEmailElement: HTMLInputElement = nativeElement.querySelector(byDataQa('confirmEmail'));
    expect(nameElement.value).toBe('James');
    expect(lastNameElement.value).toBe('Smith');
    expect(emailElement.value).toBe('email@email.com');
    expect(confirmEmailElement.value).toBe('email@email.com');
    expect(nativeElement.querySelector(byDataQa('error-message-name'))).toBeFalsy();
    expect(nativeElement.querySelector(byDataQa('error-message-lastName'))).toBeFalsy();
    expect(nativeElement.querySelector(byDataQa('error-message-email'))).toBeFalsy();
    expect(nativeElement.querySelector(byDataQa('error-message-confirmEmail'))).toBeFalsy();
    expect(component.detailsForm.controls.name.value).toBe('James');
    expect(component.detailsForm.controls.lastName.value).toBe('Smith');
    expect(component.detailsForm.controls.email.value).toBe('email@email.com');
    expect(component.detailsForm.controls.confirmEmail.value).toBe('email@email.com');
  });

  it('should display error message when is empty in the name', () => {
    const nameElement: HTMLInputElement = nativeElement.querySelector(byDataQa('name'));
    nameElement.value = '';
    simulateEvent(nameElement, 'blur');
    fixture.detectChanges();


    expect(nativeElement.querySelector(byDataQa('error-message-name'))).toBeTruthy();
    expect(nativeElement.querySelector(byDataQa('error-message-name')).textContent).toBe(' Name is required. ');
    expect(component.detailsForm.controls.name.value).toBe('');
  });

  const byDataQa = (value) => {
    return '[data-qa="' + value + '"]';
  };

  const simulateEvent = (element, eventType) => {
      const event = document.createEvent('Events');
      event.initEvent(eventType, true, false);
      element.dispatchEvent(event);
  };
});
