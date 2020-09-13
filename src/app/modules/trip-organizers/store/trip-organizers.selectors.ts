import { State } from '@Models/store.model';
import { Trip } from '@Models/trip.model';

interface TripOrganizersSelectors {
  selectTripOrganizersAllTrips(state: State): Trip[];
  selectTripOrganizersPending(state: State): boolean;
}

export const tripOrganizersSelectors: TripOrganizersSelectors = {
  selectTripOrganizersAllTrips: (state: State): Trip[] => state.tripOrganizers.trips,
  selectTripOrganizersPending: (state: State): boolean => state.tripOrganizers.pending,
};
