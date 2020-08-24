import { ActionReducer, createReducer, on } from '@ngrx/store';

import { SetPendingActionType } from '@Types/pending-action.types';

import { SignInSuccessActionType } from '../shared/types/action.types';
import { AuthActionsTypes, setPendingState, signIn, signInSuccess } from './auth.actions';
import { AuthState } from './auth.state';

export const authInitialState: AuthState = {
  profile: null,
  pending: false,
};

export const authReducer: ActionReducer<AuthState> = createReducer(
  authInitialState,
  on(setPendingState, (state: AuthState, action: SetPendingActionType<AuthActionsTypes.Pending>): AuthState => ({
    ...state,
    pending: action.isPending,
  })),
  on(signIn, (state: AuthState): AuthState => ({
    ...state,
    pending: true,
  })),
  on(signInSuccess, (state: AuthState, action: SignInSuccessActionType): AuthState => ({
    ...state,
    profile: action.profile,
  })),
);
