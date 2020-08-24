import { Profile } from '../shared/models/profile.model';

export interface AuthState {
  profile: Profile;
  pending: boolean;
}
