import { Injectable } from '@angular/core';
import { MessageProducer } from '../../message-producer';

@Injectable()
export class PageOneService extends MessageProducer {

  constructor() {
    super();
    console.log('PageOneService');
  }
}
