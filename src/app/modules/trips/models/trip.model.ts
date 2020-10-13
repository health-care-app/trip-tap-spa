import { Currencies } from '@Enums/currencies.enum';
import { TripLevels } from '@Enums/trip-levels.enum';

export interface TripUser {
  id: number;
  name: string;
  phoneNumber: string;
  facebookId: string;
  instagramId: string;
}

export interface Trip {
  id: number;
  name: string;
  active: boolean;
  image: string;
  description: string;
  comments: string;
  location: string;
  amenities: string;
  material: string;
  startTime: Date;
  including: string;
  dogFriendly: boolean;
  price: number;
  currency: Currencies;
  duration: number;
  level: TripLevels;
  availableDates: string[];
  tags: string[];
  user: TripUser;
}
