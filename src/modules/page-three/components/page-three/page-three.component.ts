import { Component, OnInit } from '@angular/core';

import { PageThreeService } from '../../service/page-three.service';
import { CITIES } from '../../utilities/data/cities';
import { Autocomplete } from '../../utilities/models/autocomplete';

@Component({
  selector: 'app-page-three',
  templateUrl: './page-three.component.html',
  styleUrls: ['./page-three.component.css']
})
export class PageThreeComponent  implements OnInit {


  errorForm: boolean;
  itemsToDisplay = CITIES;
  autocomplete: Autocomplete;
  autocompleteValidation: boolean;

  constructor(public pageThreeService: PageThreeService) {
  }

  ngOnInit() {
    this.autocomplete = this.pageThreeService.pageThree.autocomplete;

  }

  onClick() {
    if (this.autocompleteValidation) {
      this.pageThreeService.sendMessage('continue');
    } else {
      this.errorForm = true;
    }
  }

  onBack() {
    this.pageThreeService.sendMessage('back');
  }

  isAutocompleteValid($event) {
    this.autocompleteValidation = $event;
  }

}
