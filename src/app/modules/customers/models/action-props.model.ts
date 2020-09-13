import { Trip } from '@Models/trip.model';

export interface GetTripProps {
  tripId: number;
}

export interface TripProps {
  trip: Trip;
}

export interface TripsProps {
  trips: Trip[];
}
