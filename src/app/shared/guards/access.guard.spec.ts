import { TestBed } from '@angular/core/testing';

import { AccessGuard } from './access.guard';

describe('AccessGuard', (): void => {
  let guard: AccessGuard;

  beforeEach((): void => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(AccessGuard);
  });

  it('should be created', (): void => {
    expect(guard).toBeTruthy();
  });
});
