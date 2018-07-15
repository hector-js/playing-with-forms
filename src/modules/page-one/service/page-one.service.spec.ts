import { TestBed, inject } from '@angular/core/testing';

import { PageOneService } from './page-one.service';

describe('PageOneService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PageOneService]
    });
  });

  it('should be created', inject([PageOneService], (service: PageOneService) => {
    expect(service).toBeTruthy();
    expect(service.listenMessage).toBeTruthy();
    expect(service.sendMessage).toBeTruthy();
  }));
});
