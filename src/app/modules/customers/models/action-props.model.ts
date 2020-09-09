import { Trip } from './trip.model';

export interface GetTripProps {
  tripId: number;
}

export interface GetAllTripsProps {
  active: boolean;
}

export interface TripProps {
  trip: Trip;
}

export interface TripsProps {
  trips: Trip[];
}
