import { Trip } from '../models/trip.model';

export interface TripsState {
  single: Trip;
  list: Trip[];
  pending: boolean;
}
