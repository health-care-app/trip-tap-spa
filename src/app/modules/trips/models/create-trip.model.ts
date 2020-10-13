import { Currencies } from '@Enums/currencies.enum';
import { TripLevels } from '@Enums/trip-levels.enum';

export interface CreateTrip {
  image: File;
  name: string;
  location: string;
  tags: string[];
  price: number;
  currency: Currencies;
  including: string;
  startTime: number;
  duration: number;
  level: TripLevels;
  availableDates: number[];
  dogFriendly: boolean;
  comments: string;
  amenities: string;
  material: string;
  description: string;
}
