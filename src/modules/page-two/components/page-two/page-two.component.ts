import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { PageTwoService } from '../../service/page-two.service';
import { BaseParentForm } from '../../utilities/class/base-parent-form';

@Component({
  selector: 'app-page-two',
  templateUrl: './page-two.component.html',
  styleUrls: ['./page-two.component.css']
})
export class PageTwoComponent extends BaseParentForm {

  value: boolean;

  constructor(public fb: FormBuilder, public pageTwoService: PageTwoService) {
    super(fb);
  }

  onClick() {
    this.value = this.formArray.valid;
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
