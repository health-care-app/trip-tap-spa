import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { Profile } from '@Auth/shared/models/profile.model';
import { SignInCredentials } from '@Auth/shared/models/sign-in.model';
import { SignUpCredentials } from '@Auth/shared/models/sign-up.model';
import { State } from '@Models/store.model';

import { setPendingState, signIn, signUp } from './auth.actions';
import { authSelectors } from './auth.selectors';

@Injectable({ providedIn: 'root' })
export class AuthFacade {
  public profile$: Observable<Profile> = this.store.pipe(select(authSelectors.selectAuthProfile));
  public profilePending$: Observable<boolean> = this.store.pipe(select(authSelectors.selectAuthPending));

  public constructor(
    private readonly store: Store<State>,
  ) {
  }

  public setPendingState(isPending: boolean): void {
    this.store.dispatch(setPendingState({isPending}));
  }

  public signIn(signInCredentials: SignInCredentials): void {
    this.store.dispatch(signIn({signInCredentials}));
  }

  public signUp(signUpCredentials: SignUpCredentials): void {
    this.store.dispatch(signUp({signUpCredentials}));
  }
}
