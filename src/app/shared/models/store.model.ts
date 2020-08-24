import { ActionReducer } from '@ngrx/store';

import { ErrorState } from '@Store/error/error.state';

export interface Shared {
  error: ErrorState;
}

export interface State {
  shared: Shared;
}

export interface Reducers {
  shared: ActionReducer<Shared>;
}
