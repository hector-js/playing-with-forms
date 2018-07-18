import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectorListComponent } from './selector-list.component';

describe('SelectorListComponent', () => {
  let component: SelectorListComponent;
  let fixture: ComponentFixture<SelectorListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectorListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectorListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
