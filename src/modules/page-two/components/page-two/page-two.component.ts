import { Component, OnChanges, OnInit } from '@angular/core';

import { PageTwoService } from '../../service/page-two.service';
import { CITIES } from '../../utilities/data/cities';
import { Autocomplete } from '../../utilities/model/autocomplete';
import { Emails } from '../../utilities/model/emails';
import { LastName } from '../../utilities/model/last-name';
import { Name } from '../../utilities/model/name';

@Component({
  selector: 'app-page-two',
  templateUrl: './page-two.component.html',
  styleUrls: ['./page-two.component.css']
})
export class PageTwoComponent implements OnInit, OnChanges {

  itemsToDisplay = CITIES;
  errorForm: boolean;
  nameValidation: boolean;
  lastNameValidation: boolean;
  emailsValidation: boolean;
  autocompleteValidation: boolean;
  counter = 0;
  array = ['grey', 'white'];

  name: Name;
  lastName: LastName;
  emails: Emails;
  autocomplete: Autocomplete;


  constructor(public pageTwoService: PageTwoService) {
  }

  ngOnInit() {
    this.name = this.pageTwoService.pageTwo.name;
    this.lastName = this.pageTwoService.pageTwo.lastName;
    this.emails = this.pageTwoService.pageTwo.emails;
    this.autocomplete = this.pageTwoService.pageTwo.autcomplete;
  }

  ngOnChanges() {
    this.isValid();
  }

  onClick() {
    if (this.formValid()) {
      this.pageTwoService.sendMessage('continue');
    } else {
      this.errorForm = true;
    }
  }

  onBack() {
    this.pageTwoService.sendMessage('back');
  }

  isNameValid($event: boolean) {
    this.nameValidation = $event;
    this.isValid();
  }

  isLastNameValid($event: boolean) {
    this.lastNameValidation = $event;
    this.isValid();
  }

  areEmailsValids($event: boolean) {
    this.emailsValidation = $event;
    this.isValid();
  }

  isAutocompleteValid($event: boolean) {
    this.autocompleteValidation = $event;
    this.isValid();
  }

  count() {
    this.counter++;
  }

  changeColor() {
    this.array = ['yellow', 'white'];
  }

  private formValid(): boolean {
    return this.nameValidation && this.lastNameValidation && this.emailsValidation && this.autocompleteValidation;
  }

  private isValid() {
    if (this.formValid()) {
      this.errorForm = false;
    }
  }

}
