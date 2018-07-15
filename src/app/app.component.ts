import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavigationService } from '../modules/navigation';
import { AppNavigationService } from './service/app-navigation/app-navigation.service';
import { EventsSubscriber } from '../modules/message-producer';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  public nextPage: string;
  title = 'PLAYING WITH FORMS';

  constructor(public router: Router,
  public appNavigationService: AppNavigationService) {
  }
  ngOnInit() {
    this.appNavigationService.subscribeToEvents();
  }
}
