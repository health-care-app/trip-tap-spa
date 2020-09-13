import { TestBed } from '@angular/core/testing';

import { TripOrganizersRepository } from './trip-organizers.repository';

describe('TripOrganizersRepository', (): void => {
  let repository: TripOrganizersRepository;

  beforeEach((): void => {
    TestBed.configureTestingModule({});
    repository = TestBed.inject(TripOrganizersRepository);
  });

  it('should be created', (): void => {
    expect(repository).toBeTruthy();
  });
});
