import { Profile } from './profile.model';
import { SignInCredentials } from './sign-in.model';

export interface SignInProps {
  signInCredentials: SignInCredentials;
}

export interface ProfileProps {
  profile: Profile;
}
