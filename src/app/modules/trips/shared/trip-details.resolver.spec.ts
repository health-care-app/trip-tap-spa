import { TestBed } from '@angular/core/testing';

import { TripDetailsResolver } from './trip-details.resolver';

describe('TripDetailsResolver', (): void => {
  let resolver: TripDetailsResolver;

  beforeEach((): void => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(TripDetailsResolver);
  });

  it('should be created', (): void => {
    expect(resolver).toBeTruthy();
  });
});
