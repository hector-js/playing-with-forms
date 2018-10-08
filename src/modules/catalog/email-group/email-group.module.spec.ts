import { EmailGroupModule } from './email-group.module';

describe('EmailGroupModule', () => {
  let emailGroupModule: EmailGroupModule;

  beforeEach(() => {
    emailGroupModule = new EmailGroupModule();
  });

  it('should create an instance', () => {
    expect(emailGroupModule).toBeTruthy();
  });
});
