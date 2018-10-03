import { Component, OnInit } from '@angular/core';
import { PageFourService } from '../../service/page-four.service';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-page-four',
  templateUrl: './page-four.component.html',
  styleUrls: ['./page-four.component.css']
})
export class PageFourComponent implements OnInit {


  form: FormGroup;
  errorForm: boolean;

  constructor(public pageFourService: PageFourService, public fb: FormBuilder) {
  }
  ngOnInit() {
    this.form = this.fb.group({ dob: [[undefined, undefined, undefined], [Validators.required]] });
    this.form.valueChanges.subscribe(() => {
      if (this.form.valid && this.errorForm) {
        this.errorForm = false;
      }
    });
  }

  onChangeData($event) {
  }

  onBlurData($event) {
  }

  onClick() {
    if (this.form.valid) {
      this.pageFourService.sendMessage('continue');
    } else {
      this.errorForm = true;
    }
  }

  onBack() {
    this.pageFourService.sendMessage('back');
  }

  get dob() { return this.form.get('dob'); }

}
