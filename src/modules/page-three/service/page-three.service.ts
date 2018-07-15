import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { MessageProducer } from '../../message-producer';

@Injectable()
export class PageThreeService extends MessageProducer {

  public observable: Observable<string>;

  constructor() {
    super();
   }
}
