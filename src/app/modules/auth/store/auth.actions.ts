import { createAction, props } from '@ngrx/store';

// tslint:disable: max-line-length
import { PendingProps } from '@Models/pending-props.model';
import { ActionCreatorPropsType } from '@Types/action.types';

import { ProfileProps, SignInProps, SignUpProps } from '../models/action-props.model';

export enum AuthActionsTypes {
  Pending = '[Auth] PENDING',

  SetProfile = '[Auth] SET_PROFILE',

  SignIn = '[Auth] SIGN_IN',
  SignInSuccess = '[Auth] SIGN_IN_SUCCESS',

  SignUp = '[Auth] SIGN_UP',
  SignUpSuccess = '[Auth] SIGN_UP_SUCCESS',
}

export const setPendingState: ActionCreatorPropsType<AuthActionsTypes.Pending, PendingProps> = createAction(AuthActionsTypes.Pending, props<PendingProps>());

export const setProfile: ActionCreatorPropsType<AuthActionsTypes.SetProfile, ProfileProps> = createAction(AuthActionsTypes.SetProfile, props<ProfileProps>());

export const signIn: ActionCreatorPropsType<AuthActionsTypes.SignIn, SignInProps> = createAction(AuthActionsTypes.SignIn, props<SignInProps>());
export const signInSuccess: ActionCreatorPropsType<AuthActionsTypes.SignInSuccess, ProfileProps> = createAction(AuthActionsTypes.SignInSuccess, props<ProfileProps>());

export const signUp: ActionCreatorPropsType<AuthActionsTypes.SignUp, SignUpProps> = createAction(AuthActionsTypes.SignUp, props<SignUpProps>());
export const signUpSuccess: ActionCreatorPropsType<AuthActionsTypes.SignUpSuccess, ProfileProps> = createAction(AuthActionsTypes.SignUpSuccess, props<ProfileProps>());
