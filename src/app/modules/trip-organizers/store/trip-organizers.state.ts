import { Trip } from '@Models/trip.model';

export interface TripOrganizersState {
  trips: Trip[];
  pending: boolean;
}
