import { InjectionToken, Provider } from '@angular/core';
import { ActionReducer, ActionReducerMap, combineReducers } from '@ngrx/store';

import { authInitialState, authReducer } from '@Auth/store/auth.reducers';
import { Reducers, Shared, State } from '@Models/store.model';
import { errorInitialState, errorReducer } from '@Store/error/error.reducers';

export const initialState: State = {
  shared: {
    auth: authInitialState,
    error: errorInitialState,
  },
};

export const getReducers: () => Reducers = (): Reducers => reducers;

export const getInitialState: () => State = (): State => initialState;

const sharedReducers: ActionReducer<Shared> = combineReducers({
  auth: authReducer,
  error: errorReducer,
});

export const reducers: Reducers = {
  shared: sharedReducers,
};

export const reducerToken: InjectionToken<ActionReducerMap<State>> = new InjectionToken('Registered Reducers');

export const REDUCER_PROVIDER: Provider = {
  provide: reducerToken,
  useFactory: getReducers,
};
