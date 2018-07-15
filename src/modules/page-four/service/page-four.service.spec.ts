import { TestBed, inject } from '@angular/core/testing';

import { PageFourService } from './page-four.service';

describe('PageFourService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PageFourService]
    });
  });

  it('should be created', inject([PageFourService], (service: PageFourService) => {
    expect(service).toBeTruthy();
    expect(service.listenMessage).toBeTruthy();
    expect(service.sendMessage).toBeTruthy();
  }));
});
