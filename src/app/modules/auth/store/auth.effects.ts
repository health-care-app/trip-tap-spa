import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, createEffect, CreateEffectMetadata, ofType } from '@ngrx/effects';
import { Observable } from 'rxjs';
import { finalize, map, switchMap, tap } from 'rxjs/operators';

import { ModuleRoutes } from '@Enums/routes.enum';
import { UserTypes } from '@Enums/user-types.enum';

import { SignInProps, SignUpProps } from '../models/action-props.model';
import { Profile } from '../models/profile.model';
import { AuthRepository } from '../shared/auth-repository';
import { AuthActionsTypes, signInSuccess, signUpSuccess } from '../store/auth.actions';
import { SignInSuccessActionType, SignUpSuccessActionType } from '../types/action.types';
import { AuthFacade } from './auth.facade';

@Injectable()
export class AuthEffects {
  public singIn$: CreateEffectMetadata = createEffect(
    (): Observable<SignInSuccessActionType> => (
      this.actions$
        .pipe(
          ofType(AuthActionsTypes.SignIn),
          switchMap((action: SignInProps): Observable<Profile> => this.authRepository.signIn(action.signInCredentials)),
          finalize((): void => {
            this.authFacade.setPendingState(false);
          }),
          map((profile: Profile): SignInSuccessActionType => signInSuccess({profile})),
        )
    ),
  );

  public singInSuccess$: CreateEffectMetadata = createEffect(
    (): Observable<Profile> => (
      this.actions$
        .pipe(
          ofType(AuthActionsTypes.SignInSuccess),
          tap((profile: Profile): void => {
            switch (profile.userType) {
              case UserTypes.customer:
              default:
                this.router.navigate([ModuleRoutes.Customers]);
            }
          }),
        )
    ),
    { dispatch: false },
  );

  public singUp$: CreateEffectMetadata = createEffect(
    (): Observable<SignUpSuccessActionType> => (
      this.actions$
        .pipe(
          ofType(AuthActionsTypes.SignUp),
          switchMap((action: SignUpProps): Observable<Profile> => this.authRepository.signUp(action.signUpCredentials)),
          finalize((): void => {
            this.authFacade.setPendingState(false);
          }),
          map((profile: Profile): SignUpSuccessActionType => signUpSuccess({profile})),
        )
    ),
  );

  public singUpSuccess$: CreateEffectMetadata = createEffect(
    (): Observable<Profile> => (
      this.actions$
        .pipe(
          ofType(AuthActionsTypes.SignUpSuccess),
          tap((profile: Profile): void => {
            switch (profile.userType) {
              case UserTypes.customer:
              default:
                this.router.navigate([ModuleRoutes.Customers]);
            }
          }),
        )
    ),
    { dispatch: false },
  );

  public constructor(
    private readonly router: Router,
    private readonly actions$: Actions,
    private readonly authFacade: AuthFacade,
    private readonly authRepository: AuthRepository,
  ) {
  }
}
