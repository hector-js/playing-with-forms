import { InputBoxModule } from './input-box.module';

describe('InputSimpleModule', () => {
  let inputBoxModule: InputBoxModule;

  beforeEach(() => {
    inputBoxModule = new InputBoxModule();
  });

  it('should create an instance', () => {
    expect(inputBoxModule).toBeTruthy();
  });
});
