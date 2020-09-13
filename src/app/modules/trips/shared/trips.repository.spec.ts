
import { TestBed } from '@angular/core/testing';

import { TripsRepository } from './trips.repository';

describe('TripsRepository', (): void => {
  let repository: TripsRepository;

  beforeEach((): void => {
    TestBed.configureTestingModule({});
    repository = TestBed.inject(TripsRepository);
  });

  it('should be created', (): void => {
    expect(repository).toBeTruthy();
  });
});
