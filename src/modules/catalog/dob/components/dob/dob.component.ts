import { Component, OnInit, forwardRef, Renderer2, ElementRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';


const CUSTOM_VALUE_ACCESSOR: any = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => DobComponent),
  multi: true,
};


@Component({
  selector: 'app-dob',
  templateUrl: './dob.component.html',
  styleUrls: ['./dob.component.css'],
  providers: [
    CUSTOM_VALUE_ACCESSOR,
  ]
})
export class DobComponent implements OnInit, ControlValueAccessor {

  private disabled: boolean;
  private onChange: Function;
  private onTouched: Function;

  constructor(
    private elementRef: ElementRef ,
    private renderer: Renderer2) {
    this.onChange = (_: any) => { };
    this.onTouched = () => { };
    this.disabled = false;
  }

  ngOnInit() {
  }


  writeValue(obj: any): void {
    const dayElement = this.elementRef.nativeElement.querySelector('#day');
    const monthElement = this.elementRef.nativeElement.querySelector('#month');
    const yearElement = this.elementRef.nativeElement.querySelector('#year');
    this.renderer.setProperty(dayElement, 'value', obj[0]);
    this.renderer.setProperty(monthElement, 'value', obj[1]);
    this.renderer.setProperty(yearElement, 'value', obj[2]);
    console.log('the val is:', this.elementRef.nativeElement.querySelector('#day').value);
  }

  registerOnChange(fn: any): void {
    console.log('HEY');
    console.log('#registerOnChange the val is:', this.elementRef.nativeElement.querySelector('#day').value);
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    console.log('#registerOnTouched the val is:', this.elementRef.nativeElement.querySelector('#day').value);
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    console.log('#setDisabledState the val is:', this.elementRef.nativeElement.querySelector('#day').value);
    this.disabled = isDisabled;
  }

}

