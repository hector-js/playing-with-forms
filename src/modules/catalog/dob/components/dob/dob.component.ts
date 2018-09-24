import { Component, OnInit, forwardRef, Renderer2, ElementRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR, NG_VALIDATORS, Validator, FormControl } from '@angular/forms';
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
export class DobComponent implements OnInit, ControlValueAccessor, Validator  {

  private disabled: boolean;
  onChange: Function;
  onTouched: Function;

  constructor(
    private elementRef: ElementRef ,
    private renderer: Renderer2) {
    this.onChange = (_: any) => { };
    this.onTouched = () => { };
    this.disabled = false;
  }

  ngOnInit() {
  }

  writeValue(obj?: number[]| null): void {
    if (obj) {
      this.day = obj[0];
      this.month = obj[1];
      this.year = obj[2];
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

  write(): void {
    this.writeValue();
  }

  validate(c: FormControl): any {
    const dateValidator = new DateValidator(this.day, this.month, this.year);
    const errorMesssage: any = dateValidator.validateDate;
    this.initializeView(errorMesssage);
    return errorMesssage;
  }

  get value(): number[] {
    return [this.day, this.month, this.year];
  }

  private initializeView(errorMessage: any): void {
    if (errorMessage) {
      if (errorMessage.dayFormat) {
        this.addErrorClass = this.dayElement;
      } else if (errorMessage.monthFormat) {
        this.addErrorClass = this.monthElement;
      } else if (errorMessage.yearFormat) {
        this.addErrorClass = this.yearElement;
      } else {
        this.addErrorClass = this.dayElement;
        this.addErrorClass = this.monthElement;
        this.addErrorClass = this.yearElement;
      }
    } else {
      this.removeErrorClass = this.dayElement;
      this.removeErrorClass = this.monthElement;
      this.removeErrorClass = this.yearElement;
    }
  }

  private get day(): number{
    return this.dayElement.value;
  }

  private set day(value: number){
    this.renderer.setProperty(this.dayElement, 'value', value);
  }

  private get month(): number{
    return this.monthElement.value;
  }

  private set month(value: number){
    this.renderer.setProperty(this.monthElement, 'value', value);
  }

  private get year(): number{
    return this.yearElement.value;
  }

  private set year(value: number){
    this.renderer.setProperty(this.yearElement, 'value', value);
  }

  private set addErrorClass(element: any) {
    this.renderer.addClass(element, 'error');
  }

  private set removeErrorClass(element: any) {
    this.renderer.removeClass(element, 'error');
  }

  private get dayElement(): any{
    return this.nativeElement.querySelector('#day');
  }

  private get monthElement(): any{
    return this.nativeElement.querySelector('#month');
  }

  private get yearElement(): any{
    return this.nativeElement.querySelector('#year');
  }

  private get nativeElement(): Element{
    return this.elementRef.nativeElement;
  }
}

