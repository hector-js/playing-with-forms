import { Observable, Subject } from 'rxjs';

export class MessageProducer {

  private messageSubject: Subject<{}> = new Subject<{}>();

  sendMessage(value) {
    this.messageSubject.next(value);
  }

  listenMessage(): Observable<{}> {
    return this.messageSubject.asObservable();
  }

}
