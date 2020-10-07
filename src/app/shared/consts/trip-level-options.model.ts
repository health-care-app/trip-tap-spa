import { TripLevels } from '@Enums/trip-levels.enum';
import { DropdownOption } from '@Models/option.model';

export const TRIP_LEVEL_OPTIONS: DropdownOption<TripLevels>[] = [
  { label: 'TRIP.LEVELS.EASY', value: TripLevels.Easy },
  { label: 'TRIP.LEVELS.MODERATE', value: TripLevels.Moderate },
  { label: 'TRIP.LEVELS.HARD', value: TripLevels.Hard },
  { label: 'TRIP.LEVELS.ADVANCED', value: TripLevels.Advanced },
];
