import { TestBed, TestBedStatic } from '@angular/core/testing';

import { AuthInterceptor } from './auth.interceptor';

describe('AuthInterceptor', (): void => {
  beforeEach((): TestBedStatic => TestBed.configureTestingModule({
    providers: [
      AuthInterceptor,
    ],
  }));

  it('should be created', (): void => {
    const interceptor: AuthInterceptor = TestBed.inject(AuthInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
