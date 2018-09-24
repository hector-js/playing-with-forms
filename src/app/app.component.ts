import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppNavigationService } from './core/services/app-navigation/app-navigation.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  public nextPage: string;
  title = 'PLAYING WITH FORMS';
  form: FormGroup;

  constructor(public router: Router,
  public appNavigationService: AppNavigationService, public fb: FormBuilder) {
  }
  ngOnInit() {
    this.form = this.fb.group({ dob: [[10, 10, 10], [Validators.required]] });
    this.appNavigationService.subscribeToEvents();
  }

  onChangeData($event) {
  }

  onBlurData($event) {
  }
}
