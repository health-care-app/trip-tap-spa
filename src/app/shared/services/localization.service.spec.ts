import { TestBed } from '@angular/core/testing';

import { LocalizationService } from './localization.service';

describe('LocalizationService', (): void => {
  let service: LocalizationService;

  beforeEach((): void => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LocalizationService);
  });

  it('should be created', (): void => {
    expect(service).toBeTruthy();
  });
});
