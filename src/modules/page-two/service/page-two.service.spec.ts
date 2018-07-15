import { TestBed, inject } from '@angular/core/testing';

import { PageTwoService } from './page-two.service';

describe('PageTwoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PageTwoService]
    });
  });

  it('should be created', inject([PageTwoService], (service: PageTwoService) => {
    expect(service).toBeTruthy();
    expect(service.sendMessage).toBeTruthy();
    expect(service.listenMessage).toBeTruthy();
  }));
});
