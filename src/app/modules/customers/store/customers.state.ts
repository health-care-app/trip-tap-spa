import { Trip } from '../models/trip.model';

export interface CustomersState {
  trips: Trip[];
  pending: boolean;
}
