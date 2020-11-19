import { TestBed } from '@angular/core/testing';

import { TripsListResolver } from './trips-list.resolver';

describe('TripsListResolver', (): void => {
  let resolver: TripsListResolver;

  beforeEach((): void => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(TripsListResolver);
  });

  it('should be created', (): void => {
    expect(resolver).toBeTruthy();
  });
});
