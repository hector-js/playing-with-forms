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

  constructor(public pageFourService: PageFourService, public fb: FormBuilder) {
  }
  ngOnInit() {
    this.form = this.fb.group({ dob: [[10, 10, 10], [Validators.required]] });
  }

  onChangeData($event) {
  }

  onBlurData($event) {
  }

  onClick() {
    this.pageFourService.sendMessage('continue');
  }

  onBack() {
    this.pageFourService.sendMessage('back');
  }

  get dob() { return this.form.get('dob'); }

}
