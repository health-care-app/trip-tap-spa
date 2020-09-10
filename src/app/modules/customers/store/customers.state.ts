import { Trip } from '../models/trip.model';

export interface CustomersState {
  trip: Trip;
  trips: Trip[];
  pending: boolean;
}
