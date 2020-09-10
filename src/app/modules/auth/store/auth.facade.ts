import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { State } from '@Models/store.model';

import { Profile } from '../models/profile.model';
import { SignInCredentials } from '../models/sign-in.model';
import { SignUpCredentials } from '../models/sign-up.model';
import { setPendingState, setProfile, signIn, signUp } from './auth.actions';
import { authSelectors } from './auth.selectors';

@Injectable()
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

  public setProfile(profile: Profile): void {
    this.store.dispatch(setProfile({profile}));
  }
}
