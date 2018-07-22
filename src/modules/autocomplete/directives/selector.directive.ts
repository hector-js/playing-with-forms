import { Directive, ElementRef, HostListener, Input, OnInit, Output } from '@angular/core';
import { EventEmitter } from 'protractor';

@Directive({
  selector: '[appDetectClick]'
})
export class SelectorDirective {

  constructor(private el: ElementRef) { }

  @HostListener('click') onClick() {
    this.el.nativeElement.style.backgroundColor = 'black';
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.el.nativeElement.style.backgroundColor = null;
  }
}
