import { TestBed } from '@angular/core/testing';

import { DurationService } from './duration.service';

describe('DurationService', (): void => {
  let service: DurationService;

  beforeEach((): void => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DurationService);
  });

  it('should be created', (): void => {
    expect(service).toBeTruthy();
  });
});
