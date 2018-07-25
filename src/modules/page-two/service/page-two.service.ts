import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { MessageProducer } from '../../message-producer';
import { Emails } from '../utilities/model/emails';
import { PageTwo } from '../utilities/model/page-two';

@Injectable()
export class PageTwoService extends MessageProducer {

  pageTwo: PageTwo;

  constructor() {
    super();
    this.pageTwo = new PageTwo();
  }
}
