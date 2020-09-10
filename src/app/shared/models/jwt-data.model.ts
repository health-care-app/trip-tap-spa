import { Profile } from '@Auth/models/profile.model';

export interface JwtData {
  expiryDate: Date;
  profile: Profile;
}
