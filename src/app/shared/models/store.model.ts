import { ActionReducer } from '@ngrx/store';

import { AuthState } from '@Auth/store/auth.state';
import { CustomersState } from '@Customers/store/customers.state';
import { ErrorState } from '@Store/error/error.state';

export interface LazyModules {
  auth?: AuthState;
  customers?: CustomersState;
}

export interface Shared {
  error: ErrorState;
}

export interface State extends LazyModules {
  shared: Shared;
}

export interface Reducers {
  shared: ActionReducer<Shared>;
}
