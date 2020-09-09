import { State } from '@Models/store.model';

import { Profile } from '../models/profile.model';

interface AuthSelectors {
  selectAuthProfile(state: State): Profile;
  selectAuthPending(state: State): boolean;
}

export const authSelectors: AuthSelectors = {
  selectAuthProfile: (state: State): Profile => state.auth.profile,
  selectAuthPending: (state: State): boolean => state.auth.pending,
};
