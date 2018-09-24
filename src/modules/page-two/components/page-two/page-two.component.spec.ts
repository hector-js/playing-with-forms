import { async, ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';

import { PageTwoComponent } from './page-two.component';
import { ReactiveFormsModule, FormGroup } from '@angular/forms';


describe('PageTwoComponent', () => {
  let component: PageTwoComponent;
  let fixture: ComponentFixture<PageTwoComponent>;
  let nativeElement: HTMLElement;

  const byDataQa = (value) => {
    return '[data-qa="' + value + '"]';
  };

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

  const simulateEvent = (element, eventType) => {
      const event = document.createEvent('Events');
      event.initEvent(eventType, true, false);
      element.dispatchEvent(event);
  };
});
