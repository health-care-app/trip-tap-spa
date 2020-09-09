import { Trip } from './trip.model';

export interface GetAllTripsProps {
  active: boolean;
}

export interface TripsProps {
  trips: Trip[];
}
