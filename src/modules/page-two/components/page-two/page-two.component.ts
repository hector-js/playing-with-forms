import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Subscription } from 'rxjs';

import { BaseParentForm } from '../../../forms';
import { PageTwoService } from '../../service/page-two.service';
import { CITIES } from '../../utilities/data/cities';

@Component({
  selector: 'app-page-two',
  templateUrl: './page-two.component.html',
  styleUrls: ['./page-two.component.css']
})
export class PageTwoComponent extends BaseParentForm implements OnInit, OnDestroy {

  itemsToDisplay = CITIES;
  subscriptionChanges: Subscription;
  errorForm: boolean;

  constructor(public fb: FormBuilder, public pageTwoService: PageTwoService) {
    super(fb);
  }

  ngOnInit() {
    this.subscriptionChanges = this.formArray.valueChanges.subscribe(() => {
      if (this.errorForm && this.formArray.valid) {
        this.errorForm = false;
      }
    });
  }

  onClick() {
    if (this.formArray.valid) {
      this.pageTwoService.sendMessage('continue');
    } else {
      this.formArray.updateValueAndValidity();
      this.errorForm = true;
    }
  }

  onBack() {
    this.pageTwoService.sendMessage('back');
  }

  ngOnDestroy() {
    this.subscriptionChanges.unsubscribe();
  }

}
