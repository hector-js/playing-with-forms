import { DisplayNavModule } from './display-nav.module';

describe('DisplayNavModule', () => {
  let displayNavModule: DisplayNavModule;

  beforeEach(() => {
    displayNavModule = new DisplayNavModule();
  });

  it('should create an instance', () => {
    expect(displayNavModule).toBeTruthy();
  });
});
