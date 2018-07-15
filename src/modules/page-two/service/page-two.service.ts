import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { MessageProducer } from '../../message-producer';

@Injectable()
export class PageTwoService extends MessageProducer{

  public observable: Observable<string>;

  constructor() {
   super();
  }
}
