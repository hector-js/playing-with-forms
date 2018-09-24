import { Injectable } from '@angular/core';

import { EventsSubscriber } from '../../../../modules/message-producer';
import { NavigationService } from '../../../../modules/navigation';
import { PageFourService } from '../../../../modules/page-four/service/page-four.service';
import { PageOneService } from '../../../../modules/page-one/service/page-one.service';
import { PageThreeService } from '../../../../modules/page-three/service/page-three.service';
import { PageTwoService } from '../../../../modules/page-two/service/page-two.service';


@Injectable({
  providedIn: 'root'
})
export class AppNavigationService implements EventsSubscriber {

  constructor(
    public navigationService: NavigationService,
    public pageOneService: PageOneService,
    public pageTwoService: PageTwoService,
    public pageThreeService: PageThreeService,
    public pageFourService: PageFourService) {
  }

  private pageServices = [
    this.pageOneService,
    this.pageTwoService,
    this.pageThreeService,
    this.pageFourService
  ];

  subscribeToEvents() {
    this.pageServices.forEach(
      service => service.listenMessage()
        .subscribe(action => this.navigationService.applyAction(action)));
  }

}
