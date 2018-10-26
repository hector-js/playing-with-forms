import { PageFourService } from '../../service/page-four.service';
import { emailsValidator } from '../../../catalog/email-group/utilities/validators/emails-validator';
import { IEmails } from '../../../catalog/email-group/utilities/models/emails';
import { Component, OnInit, EventEmitter } from '@angular/core';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-page-four',
  templateUrl: './page-four.component.html',
  styleUrls: ['./page-four.component.css']
})
export class PageFourComponent implements OnInit {


  form: FormGroup;
  errorForm: boolean;
  emailGroup: IEmails;
  event: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor(public pageFourService: PageFourService, public fb: FormBuilder) {
    this.emailGroup = { email: '', confirm: '' };
  }
  ngOnInit() {
    this.form = this.fb.group({
      dob: [[undefined, undefined, undefined], [Validators.required]],
      emails: [this.emailGroup]
    });
    this.form.valueChanges.subscribe(() => {
      if (this.form.valid && this.errorForm) {
        this.errorForm = false;
      }
    });

    this.event.emit(false);
  }

  onChangeData($event) {
  }

  onBlurData($event) {
  }

  onChangeDataEmails($event) {
  }

  onBlurDataEmails($event) {
  }

  onClick() {

    if (this.form.valid) {
      this.pageFourService.sendMessage('continue');
    } else {
      this.event.emit(true);
      this.form.updateValueAndValidity();
      this.errorForm = true;
    }
  }

  onBack() {
    this.pageFourService.sendMessage('back');
  }

  get dob() { return this.form.get('dob'); }
  get emails() { return this.form.get('emails'); }

}
