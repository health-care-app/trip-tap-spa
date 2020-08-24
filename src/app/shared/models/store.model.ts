import { ActionReducer } from '@ngrx/store';

import { AuthState } from '@Auth/store/auth.state';
import { ErrorState } from '@Store/error/error.state';

export interface LazyModules {
  auth?: AuthState;
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
