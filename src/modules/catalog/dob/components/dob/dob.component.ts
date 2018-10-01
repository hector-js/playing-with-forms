import { Component, ElementRef, forwardRef, OnInit, Renderer2 } from '@angular/core';
import { ControlValueAccessor, FormControl, NG_VALIDATORS, NG_VALUE_ACCESSOR, Validator } from '@angular/forms';

import { DateValidator } from '../../utilities/validators/date-validator';

const CUSTOM_VALUE_ACCESSOR: any = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => DobComponent),
  multi: true,
};

const CUSTOM_VALIDATORS: any = {
  provide: NG_VALIDATORS,
  useExisting: forwardRef(() => DobComponent),
  multi: true,
};

@Component({
  selector: 'app-dob',
  templateUrl: './dob.component.html',
  styleUrls: ['./dob.component.css'],
  providers: [
    CUSTOM_VALUE_ACCESSOR,
    CUSTOM_VALIDATORS
  ],

})
export class DobComponent implements OnInit, ControlValueAccessor, Validator {

  private disabled: boolean;
  onChange: Function;
  onTouched: Function;

  private dayTouched: boolean;
  private monthTouched: boolean;
  private yearTouched: boolean;
  private lastControl: FormControl;

  constructor(
    private elementRef: ElementRef,
    private renderer: Renderer2) {
    this.onChange = (_: any) => { };
    this.onTouched = () => { };
    this.disabled = false;
  }

  ngOnInit() {
  }

  writeValue(valueForm?: number[] | null): void {
    if (valueForm) {
      this.day = valueForm[0];
      this.month = valueForm[1];
      this.year = valueForm[2];
    }
    this.onChange(this.value);
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  validate(control: FormControl): any {
    this.lastControl = control;
    let errorMessage: any;
    const dateValidator = new DateValidator(this.day, this.month, this.year);
    errorMessage = dateValidator.validateDate;
   if (control.touched) {
      this.initializeView(errorMessage, control.value);
    }

    return errorMessage;
  }

  blurOnDay(): void {
    this.dayTouched = true;
    this.formIsTouched();
  }

  blurOnMonth(): void {
    this.monthTouched = true;
    this.formIsTouched();
  }

  blurOnYear(): void {
    this.yearTouched = true;
    this.formIsTouched();
  }

  keyUpOnDay(): void {
    this.writeValue();
    this.dayTouched = true;
    this.formIsTouched();
  }

  keyUpOnMonth(): void {
    this.writeValue();
    this.monthTouched = true;
    this.formIsTouched();
  }

  keyUpOnYear(): void {
    this.writeValue();
    this.yearTouched = true;
    this.formIsTouched();
  }

  get value(): number[] {
    return [this.day, this.month, this.year];
  }

  private initializeView(errorMessage: any, c: number[]): void {
    if (errorMessage) {
      this.addErrorClass = this.dayElement;
      this.addErrorClass = this.monthElement;
      this.addErrorClass = this.yearElement;
    } else {
      this.removeErrorClass = this.dayElement;
      this.removeErrorClass = this.monthElement;
      this.removeErrorClass = this.yearElement;
    }
  }

  private formIsTouched() {
    if (this.dayTouched && this.monthTouched && this.yearTouched) {
      this.onTouched();
      this.validate(this.lastControl);
    }
  }

  private get day(): number { return this.dayElement.value; }

  private set day(value: number) { this.setProperty(this.dayElement, value); }

  private get dayElement(): any { return this.querySelector('#day'); }

  private get month(): number { return this.monthElement.value; }

  private set month(value: number) { this.setProperty(this.monthElement, value); }

  private get monthElement(): any { return this.querySelector('#month'); }

  private get year(): number { return this.yearElement.value; }

  private set year(value: number) { this.setProperty(this.yearElement, value); }

  private get yearElement(): any { return this.querySelector('#year'); }

  private set addErrorClass(element: any) { this.renderer.addClass(element, 'error'); }

  private set removeErrorClass(element: any) { this.renderer.removeClass(element, 'error'); }

  private querySelector = (value: string) => this.elementRef.nativeElement.querySelector(value);

  private setProperty = ( element: any, value: number) => this.renderer.setProperty(element, 'value', value);
}
