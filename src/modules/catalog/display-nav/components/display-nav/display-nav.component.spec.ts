import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayNavComponent } from './display-nav.component';
import { Component, ViewChild, OnInit } from '@angular/core';


@Component({
  selector: 'app-wrapper',
  template: '<app-display-nav #comp [counter]="counter" [color]="array"></app-display-nav>'
})
export class TestWrapperComponent implements OnInit {

  counter:  any;
  array: string[];

  @ViewChild('comp') comp: any;

  ngOnInit() {
    this.counter = 0;
  }

  // count() {
  //   this.counter++;
  // }

  // changeColor() {
  //   this.array = ['yellow', 'white'];
  // }
}

describe('DisplayNavComponent', () => {
  let component: TestWrapperComponent;
  let fixture: ComponentFixture<TestWrapperComponent>;
  let nativeElement: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        DisplayNavComponent,
        TestWrapperComponent
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestWrapperComponent);
    component = fixture.componentInstance;
    nativeElement = fixture.nativeElement;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
    expect(nativeElement.querySelector('svg')).toBeTruthy();
  });

  it('should display the number added in the counter', () => {
    component.counter = 2;

    fixture.detectChanges();

    expect(component.comp.nativeElement.querySelector('text').getText()).toBe(2);
  });

});
