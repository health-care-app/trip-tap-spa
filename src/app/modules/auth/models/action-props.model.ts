import { Profile } from './profile.model';
import { SignInCredentials } from './sign-in.model';
import { SignUpCredentials } from './sign-up.model';

export interface SignInProps {
  signInCredentials: SignInCredentials;
}

export interface SignUpProps {
  signUpCredentials: SignUpCredentials;
}

export interface ProfileProps {
  profile: Profile;
}
