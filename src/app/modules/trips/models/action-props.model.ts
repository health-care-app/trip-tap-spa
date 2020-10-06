import { CreateTrip } from './create-trip.model';
import { Trip } from './trip.model';

export interface GetTripProps {
  tripId: number;
}

export interface GetTripsListProps {
  active: boolean;
}

export interface TripProps {
  trip: Trip;
}

export interface TripsProps {
  trips: Trip[];
}

export interface CreateTripProps {
  trip: CreateTrip;
}
