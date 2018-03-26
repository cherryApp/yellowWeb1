import { TestBed, inject } from '@angular/core/testing';

import { MatekajaaddService } from './matekajaadd.service';

describe('MatekajaaddService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MatekajaaddService]
    });
  });

  it('should be created', inject([MatekajaaddService], (service: MatekajaaddService) => {
    expect(service).toBeTruthy();
  }));
});
