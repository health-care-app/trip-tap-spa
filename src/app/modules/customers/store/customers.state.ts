import { Trip } from '@Models/trip.model';

export interface CustomersState {
  trip: Trip;
  trips: Trip[];
  pending: boolean;
}
