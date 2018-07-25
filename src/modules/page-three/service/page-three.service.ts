import { Injectable } from '@angular/core';

import { MessageProducer } from '../../message-producer';
import { PageThree } from '../utilities/models/page-three';

@Injectable()
export class PageThreeService extends MessageProducer {

  pageThree: PageThree;
  constructor() {
    super();
    this.pageThree = new PageThree();
  }
}

