import { ActionReducer, createReducer, on } from '@ngrx/store';

import { CatchErrorActionType } from '@Types/error-action.types';

import { catchError, clearError } from './error.actions';
import { ErrorState } from './error.state';

export const errorInitialState: ErrorState = null;

export const errorReducer: ActionReducer<ErrorState> = createReducer(
  errorInitialState,
  on(catchError, (_state: ErrorState, action: CatchErrorActionType): ErrorState => action.error),
  on(clearError, (): ErrorState => null),
);
