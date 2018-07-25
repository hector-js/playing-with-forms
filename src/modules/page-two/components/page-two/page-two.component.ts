import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Subscription } from 'rxjs';

import { PageTwoService } from '../../service/page-two.service';
import { CITIES } from '../../utilities/data/cities';
import { Emails } from '../../utilities/model/emails';
import { Name } from '../../utilities/model/name';
import { LastName } from '../../utilities/model/last-name';
import { Autocomplete } from '../../utilities/model/autocomplete';

@Component({
  selector: 'app-page-two',
  templateUrl: './page-two.component.html',
  styleUrls: ['./page-two.component.css']
})
export class PageTwoComponent implements OnInit {

  itemsToDisplay = CITIES;
  errorForm: boolean;
  nameValidation: boolean;
  lastNameValidation: boolean;
  emailsValidation: boolean;
  autocompleteValidation: boolean;

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

  onClick() {
    if (this.nameValidation && this.lastNameValidation
      && this.emailsValidation && this.isAutocompleteValid) {
      this.pageTwoService.sendMessage('continue');
    } else {
      this.errorForm = true;
    }
  }

  onBack() {
    this.pageTwoService.sendMessage('back');
  }

  isNameValid($event) {
    this.nameValidation = $event;
  }

  isLastNameValid($event) {
    this.lastNameValidation = $event;
  }

  areEmailsValids($event) {
    this.emailsValidation = $event;
  }

  isAutocompleteValid($event) {
    this.autocompleteValidation = $event;
  }


}
