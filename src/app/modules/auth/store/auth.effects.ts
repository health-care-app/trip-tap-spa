import { Injectable } from '@angular/core';
import { Actions, createEffect, CreateEffectMetadata, ofType } from '@ngrx/effects';
import { Observable } from 'rxjs';
import { finalize, map, switchMap } from 'rxjs/operators';

import { AuthRepository } from '../shared/auth-repository';
import { SignInProps } from '../shared/models/action-props.model';
import { Profile } from '../shared/models/profile.model';
import { SignInSuccessActionType } from '../shared/types/action.types';
import { AuthActionsTypes, signInSuccess } from '../store/auth.actions';
import { AuthFacade } from './auth.facade';

@Injectable({ providedIn: 'root' })
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

  public constructor(
    private readonly actions$: Actions,
    private readonly authFacade: AuthFacade,
    private readonly authRepository: AuthRepository,
  ) {
  }
}
