import { TestBed, inject } from '@angular/core/testing';

import { RcsService } from './rcs.service';

describe('RcsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RcsService]
    });
  });

  it('should be created', inject([RcsService], (service: RcsService) => {
    expect(service).toBeTruthy();
  }));
});
