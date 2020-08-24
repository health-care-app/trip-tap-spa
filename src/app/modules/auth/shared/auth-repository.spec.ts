import { TestBed } from '@angular/core/testing';

import { AuthRepository } from './auth-repository';

describe('AuthRepository', (): void => {
  let service: AuthRepository;

  beforeEach((): void => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthRepository);
  });

  it('should be created', (): void => {
    expect(service).toBeTruthy();
  });
});
