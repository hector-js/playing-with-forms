import { fakeAsync } from '@angular/core/testing';

import { MessageProducer } from './message-producer';

describe('MessageProducer', () => {
  let messageProducer: MessageProducer;

  beforeEach(() => {
    messageProducer = new MessageProducer();
  });

  it('should be created', () => {
    expect(messageProducer).toBeTruthy();
  });

  it('should get a message when a child send it', fakeAsync(() => {

    const message = {
      data: 1,
      description: 'this can be any value'
    };

    let flag: boolean;
    messageProducer.listenMessage().subscribe(value => {
      flag = true;
      expect(value).toBe(message);
    });

    messageProducer.sendMessage(message);

    expect(flag).toBeTruthy();
  }));
});
