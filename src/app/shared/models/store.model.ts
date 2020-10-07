import { ActionReducer } from '@ngrx/store';

import { AuthState } from '@Auth/store/auth.state';
import { ErrorState } from '@Store/error/error.state';
import { TripsState } from '@Trips/store/trips.state';

export interface LazyModules {
  trips?: TripsState;
}

export interface Shared {
  auth: AuthState;
  error: ErrorState;
}

export interface State extends LazyModules {
  shared: Shared;
}

export interface Reducers {
  shared: ActionReducer<Shared>;
}
