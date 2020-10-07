import { TestBed, TestBedStatic } from '@angular/core/testing';

import { ErrorHandlingInterceptor } from './error-handling.interceptor';

describe('ErrorHandlingInterceptor', (): void => {
  beforeEach((): TestBedStatic => TestBed.configureTestingModule({
    providers: [
      ErrorHandlingInterceptor,
    ],
  }));

  it('should be created', (): void => {
    const interceptor: ErrorHandlingInterceptor = TestBed.inject(ErrorHandlingInterceptor);

    expect(interceptor).toBeTruthy();
  });
});
