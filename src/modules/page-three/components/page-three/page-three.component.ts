import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Subscription } from 'rxjs';

import { BaseParentForm } from '../../../forms';
import { PageThreeService } from '../../service/page-three.service';
import { CITIES } from '../../utilities/data/cities';

@Component({
  selector: 'app-page-three',
  templateUrl: './page-three.component.html',
  styleUrls: ['./page-three.component.css']
})
export class PageThreeComponent extends BaseParentForm implements OnInit, OnDestroy {


  errorForm: boolean;
  subscriptionChanges: Subscription;
  itemsToDisplay = CITIES;

  constructor(
    public pageThreeService: PageThreeService,
    public fb: FormBuilder
  ) { super(fb); }

  ngOnInit() {
    this.subscriptionChanges = this.formArray.valueChanges.subscribe(() => {
      if (this.errorForm && this.formArray.valid) {
        this.errorForm = false;
      }
    });
  }

  onClick() {
    if (this.formArray.valid) {
      this.pageThreeService.sendMessage('continue');
    } else {
      this.errorForm = true;
    }
  }

  onBack() {
    this.pageThreeService.sendMessage('back');
  }

  ngOnDestroy() {
    this.subscriptionChanges.unsubscribe();
  }
}
