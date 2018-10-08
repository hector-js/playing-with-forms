import { Component, OnInit, Renderer2, ElementRef, forwardRef, Input, EventEmitter } from '@angular/core';
import { ControlValueAccessor, Validator, NG_VALIDATORS, NG_VALUE_ACCESSOR, FormControl } from '@angular/forms';
import { IEmails } from '../../utilities/models/emails';
import { emailsValidator } from '../../utilities/validators/emails-validator';
import { ViewPresenter } from '../../utilities/view-presenter';

const CUSTOM_VALUE_ACCESSOR: any = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => EmailsGroupComponent),
  multi: true,
};

const CUSTOM_VALIDATORS: any = {
  provide: NG_VALIDATORS,
  useExisting: forwardRef(() => EmailsGroupComponent),
  multi: true,
};

@Component({
  selector: 'app-emails-group',
  templateUrl: './emails-group.component.html',
  styleUrls: ['./emails-group.component.css'],
  providers: [
    CUSTOM_VALUE_ACCESSOR,
    CUSTOM_VALIDATORS
  ]
})
export class EmailsGroupComponent implements OnInit, ControlValueAccessor, Validator {

  onChange: Function;
  onTouched: Function;
  emailMessage: boolean;
  confirmMessage: boolean;
  blurFlag: boolean;
  @Input() parentEvent: EventEmitter<boolean>;

  private input: string;
  private event: string;
  private refresh: boolean;

  constructor(public elementRef: ElementRef, public renderer: Renderer2) {
    this.onChange = () => { };
    this.onTouched = () => { };
  }

  ngOnInit() {
    this.parentEvent.subscribe(val => {
      this.refresh = val;
      if (this.refresh) {
        const viewPresenter = new ViewPresenter(this.value, this.input, true);
        this.prepareView(viewPresenter.view);
        this.refresh = false;
      }
    });
  }

  get value(): IEmails {
    return {
      email: this.email,
      confirm: this.confirm
    };
  }

  validate(formControl: FormControl): { [key: string]: boolean } | null  {
    if (formControl.touched && this.event === 'blur' && !this.refresh) {
      const viewPresenter = new ViewPresenter(this.value, this.input, false);
      this.prepareView(viewPresenter.view);
    }

    if (this.refresh) {
      const viewPresenter = new ViewPresenter(this.value, this.input, true);
      this.prepareView(viewPresenter.view);
      this.refresh = false;
    }

    return emailsValidator(this.value);
  }

  writeValue(emails?: IEmails): void {
    if (emails) {
      this.email = emails.email;
      this.confirm = emails.confirm;
    }
    this.onChange(this.value);
  }

  emailOnBlur() {
    this.event = 'blur';
    this.input = 'email';
    this.onTouched(this.value);
    this.writeValue();
  }

  confirmOnBlur() {
    this.event = 'blur';
    this.input = 'confirm';
    this.blurFlag = true;
    this.onTouched(this.value);
    this.writeValue();
  }

  emailOnKeyup() {
    this.event = 'keyup';
    this.input = 'email';
    this.onTouched(this.value);
    this.writeValue();
  }

  confirmOnKeyup() {
    this.event = 'keyup';
    this.input = 'confirm';
    this.onTouched(this.value);
    this.writeValue();
  }

  registerOnChange(fn: any): void { this.onChange = fn; }
  registerOnTouched(fn: any): void { this.onTouched = fn; }

  private prepareView(scenario: any) {
    if (scenario) {
      if (scenario.emailError) {
        this.emailMessage = true;
        this.confirmMessage = false;
        this.addErrorClass = this.emailElement;
        this.removeErrorClass = this.confirmElement;
      } else if (scenario.confirmError) {
        this.emailMessage = false;
        this.confirmMessage = true;
        this.removeErrorClass = this.emailElement;
        this.addErrorClass = this.confirmElement;
      } else {
        this.emailMessage = true;
        this.confirmMessage = true;
        this.addErrorClass = this.emailElement;
        this.addErrorClass = this.confirmElement;
      }
    } else {
      this.emailMessage = false;
      this.confirmMessage = false;
      this.removeErrorClass = this.emailElement;
      this.removeErrorClass = this.confirmElement;
    }
  }
  private get email(): string { return this.emailElement.value; }
  private set email(value: string) { this.setProperty(this.emailElement, value); }
  private get emailElement(): HTMLInputElement { return this.querySelector('#email'); }
  private get confirm(): string { return this.confirmElement.value; }
  private set confirm(value: string) { this.setProperty(this.confirmElement, value); }
  private get confirmElement(): HTMLInputElement { return this.querySelector('#confirm'); }
  private set addErrorClass(element: HTMLInputElement) { this.renderer.addClass(element, 'error'); }
  private set removeErrorClass(element: HTMLInputElement) { this.renderer.removeClass(element, 'error'); }
  private querySelector = (value: string): HTMLInputElement => this.elementRef.nativeElement.querySelector(value);
  private setProperty = (element: HTMLInputElement, value: string) => this.renderer.setProperty(element, 'value', value);
}
