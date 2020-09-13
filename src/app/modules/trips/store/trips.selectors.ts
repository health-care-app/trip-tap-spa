import { State } from '@Models/store.model';

import { Trip } from '../models/trip.model';

interface TripsSelectors {
  selectTrip(state: State): Trip;
  selectTripsList(state: State): Trip[];
  selectTripsPending(state: State): boolean;
}

export const tripsSelectors: TripsSelectors = {
  selectTrip: (state: State): Trip => state.trips.single,
  selectTripsList: (state: State): Trip[] => state.trips.list,
  selectTripsPending: (state: State): boolean => state.trips.pending,
};
