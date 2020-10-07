import { UserTypes } from '@Enums/user-types.enum';

export interface Profile {
  id: number;
  userType: UserTypes;
  username: string;
  email: string;
  approved: boolean;
  phoneNumber: string;
  firstName: string;
  lastName: string;
  dateOfBirth: Date;
  gender: string;
  country: string;
  city: string;
  homeAddress: string;
}
