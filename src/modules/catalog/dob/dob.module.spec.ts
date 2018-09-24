import { DobModule } from './dob.module';

describe('DobModule', () => {
  let dobModule: DobModule;

  beforeEach(() => {
    dobModule = new DobModule();
  });

  it('should create an instance', () => {
    expect(dobModule).toBeTruthy();
  });
});
