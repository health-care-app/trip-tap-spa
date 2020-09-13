import { State } from '@Models/store.model';
import { Trip } from '@Models/trip.model';

interface CustomersSelectors {
  selectCustomersTrip(state: State): Trip;
  selectCustomersAllTrips(state: State): Trip[];
  selectCustomersPending(state: State): boolean;
}

export const customersSelectors: CustomersSelectors = {
  selectCustomersTrip: (state: State): Trip => state.customers.trip,
  selectCustomersAllTrips: (state: State): Trip[] => state.customers.trips,
  selectCustomersPending: (state: State): boolean => state.customers.pending,
};
