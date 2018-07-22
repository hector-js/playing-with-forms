import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { PageTwoService } from '../../service/page-two.service';
import { BaseParentForm } from '../../utilities/class/base-parent-form';
import { CITIES } from '../../utilities/data/cities';

@Component({
  selector: 'app-page-two',
  templateUrl: './page-two.component.html',
  styleUrls: ['./page-two.component.css']
})
export class PageTwoComponent extends BaseParentForm {

  itemsToDisplay = CITIES;

  constructor(public fb: FormBuilder, public pageTwoService: PageTwoService) {
    super(fb);
  }

  onClick() {
    if (this.formArray.valid) {
      this.pageTwoService.sendMessage('continue');
    } else {
      this.formArray.markAsTouched();
    }
  }

  onBack() {
    this.pageTwoService.sendMessage('back');
  }

}
