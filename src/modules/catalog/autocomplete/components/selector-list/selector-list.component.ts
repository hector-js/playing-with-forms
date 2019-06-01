import { Component, Input, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormBuilder, Validators, ValidatorFn, AbstractControl } from '@angular/forms';
import { BaseForm } from '../../../../forms';
import { Autocomplete } from '../../../../page-two/utilities/model/autocomplete';

@Component({
  selector: 'app-selector-list',
  templateUrl: './selector-list.component.html',
  styleUrls: ['./selector-list.component.css']
})
export class SelectorListComponent extends BaseForm implements OnInit {

  displayList: boolean;
  element = undefined;
  itemFocused = 0;
  numberOfItems = 0 ;

  @Input() itemsToDisplay;
  @Input() model: Autocomplete;
  @ViewChild('itemsContainer', {static: true}) public itemsContainer: ElementRef;

  arrayItems = [];

  constructor(public fb: FormBuilder) {
    super();
  }

  ngOnInit() {
    this.arrayItems.push(...this.itemsToDisplay);
    this.form = this.fb.group({
      autocomplete: [this.model.autocomplete ? this.model.autocomplete : '', [Validators.required, existOn(this.arrayItems)]]
    });
    this.sendEventsUp();
  }

  keyup($event) {
    this.displayList = true;

    const container = this.itemsContainer.nativeElement;

    const elements = container.querySelectorAll('#itemDisplayed');
    this.numberOfItems = elements.length;

    const ESCAPE = 27;
    const DOWN = 40;
    const UP = 38;
    const ENTER = 13;
    switch ($event.keyCode) {
      case ESCAPE:
        this.displayList = false;
        break;

      case UP:
        if (0 === this.numberOfItems) {
          return;
        }
        this.itemFocused = (this.numberOfItems + this.itemFocused - 1) % this.numberOfItems;
        break;

      case DOWN:
        if (0 === this.numberOfItems) {
          return;
        }

        this.displayList = true;
        let sum = this.itemFocused;
        sum = (this.itemFocused === null) ? 0 : sum + 1;
        this.itemFocused = (this.numberOfItems + sum) % this.numberOfItems;
        break;
      case ENTER:
        this.form.controls.autocomplete.setValue(this.selectElement(this.itemFocused, elements));
        this.displayList = false;
        break;
      default:
        this.element = { value: $event.target.value };
    }
  }

  selectElement(index: number, elements: ElementRef): string {
    return elements[index].innerText;
  }

  selectValue(inputValue) {
    this.form.controls.autocomplete.setValue(inputValue);
    this.element = {value: inputValue};
  }

  blurHandler(evt: any) {
    this.displayList = false;
  }


  emitValidation() {
    this.validation.emit(this.form.valid);
  }

  updateModel() {
    this.model.autocomplete = this.form.controls.autocomplete.value as string;
  }


  get autocomplete() { return this.form.get('autocomplete'); }

}

export function existOn(elements): ValidatorFn {
  return (control: AbstractControl): {[key: string]: any} | null => {
    return elements.find(item => item.value.toLowerCase() === control.value.toLowerCase()) ? null : {'existOn': {value: control.value}} ;
  };
}
