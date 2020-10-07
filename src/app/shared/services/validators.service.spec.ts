import { TestBed } from '@angular/core/testing';

import { ValidatorsService } from './validators.service';

describe('ValidatorsService', (): void => {
  let service: ValidatorsService;

  beforeEach((): void => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ValidatorsService);
  });

  it('should be created', (): void => {
    expect(service).toBeTruthy();
  });
});
