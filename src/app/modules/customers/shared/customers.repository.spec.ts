
import { TestBed } from '@angular/core/testing';

import { CustomersRepository } from './customers.repository';

describe('CustomersRepository', (): void => {
  let repository: CustomersRepository;

  beforeEach((): void => {
    TestBed.configureTestingModule({});
    repository = TestBed.inject(CustomersRepository);
  });

  it('should be created', (): void => {
    expect(repository).toBeTruthy();
  });
});
