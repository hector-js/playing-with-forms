import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { PageOneService } from '../../../page-one/service/page-one.service';
import { PageTwoService } from '../../../page-two/service/page-two.service';
import { PageThreeService } from '../../../page-three/service/page-three.service';
import { PageFourService } from '../../../page-four/service/page-four.service';

@Injectable({
  providedIn: 'root'
})
export class NavigationService {

  private nextPage: string;

  constructor(public router: Router,
     public pageOneService: PageOneService,
     public pageTwoService: PageTwoService,
     public pageThreeService: PageThreeService,
     public pageFourService: PageFourService) {
      console.log('NavigationService');
  }

  subscribeActionEvents() {
    this.pageOneService.listenMessage().subscribe(value => {
      this.applyAction(value);
    });
    this.pageTwoService.listenMessage().subscribe(value => {
      this.applyAction(value);
    });
    this.pageThreeService.listenMessage().subscribe(value => {
      this.applyAction(value);
    });
    this.pageFourService.listenMessage().subscribe(value => {
      this.applyAction(value);
    });
  }

  applyAction(value) {

    if (value === 'continue') {
      switch (this.nextPage) {
        case '/page-one':
          this.nextPage = '/page-two';
          break;
        case '/page-two':
          this.nextPage = '/page-three';
          break;
        case '/page-three':
          this.nextPage = '/page-four';
          break;
        case '/page-four':
          this.nextPage = '/page-one';
          break;
        default:
          this.nextPage = '/page-two';
      }
      this.router.navigate([this.nextPage]);
    } else {
      switch (this.nextPage) {
        case '/page-one':
          this.nextPage = '/page-four';
          break;
        case '/page-two':
          this.nextPage = '/page-one';
          break;
        case '/page-three':
          this.nextPage = '/page-two';
          break;
        case '/page-four':
          this.nextPage = '/page-three';
          break;
        default:
          this.nextPage = '/page-one';
      }
      this.router.navigate([this.nextPage]);
    }
  }
}
