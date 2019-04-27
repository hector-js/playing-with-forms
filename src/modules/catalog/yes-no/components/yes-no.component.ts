import { Component, OnInit, ElementRef, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

const CUSTOM_VALUE_ACCESSOR: any = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => YesNoComponent),
  multi: true,
};


@Component({
  selector: 'app-yes-no',
  templateUrl: './yes-no.component.html',
  styleUrls: ['./yes-no.component.css'],
  providers: [
    CUSTOM_VALUE_ACCESSOR
  ]
})
export class YesNoComponent implements ControlValueAccessor {

  isFocusYes: boolean;
  isFocusNo: boolean;

  private onChange = (_any) => { };
  private onTouched = () => { };

  constructor() { }

  writeValue(obj: any): void {
    if (obj === true) {
      this.yes();
    }

    if (obj === false) {
      this.no();
    }

    this.onChange(this.value);
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  yes(): void {
    this.isFocusYes = true;
    this.isFocusNo = false;
    this.onChange(this.value);
    this.onTouched();
  }

  no(): void {
    this.isFocusYes = false;
    this.isFocusNo = true;
    this.onChange(this.value);
    this.onTouched();
  }

  get value(): boolean { return this.isFocusYes; }
}
