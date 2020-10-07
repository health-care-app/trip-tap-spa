import { TestBed } from '@angular/core/testing';

import { AccessTokenService } from './access-token.service';

describe('AccessTokenService', (): void => {
  let service: AccessTokenService;

  beforeEach((): void => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AccessTokenService);
  });

  it('should be created', (): void => {
    expect(service).toBeTruthy();
  });
});
