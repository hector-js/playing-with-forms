import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AppNavigationService } from './core/services/app-navigation/app-navigation.service';
import { Meta } from '@angular/platform-browser';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  public nextPage: string;
  title = 'HECTOR JIMENEZ';

  constructor(public router: Router,
  public appNavigationService: AppNavigationService,
  public metaService: Meta) {
    const baseUrl = window.location.protocol + '//' + window.location.hostname;
    const imageUrl = baseUrl + '/assets/Icon-hjs.png';
    metaService.addTag( { property: 'og:image', content: imageUrl } );
  }
  ngOnInit() {
    this.appNavigationService.subscribeToEvents();
  }
}
