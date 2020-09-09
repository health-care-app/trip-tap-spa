import { State } from '@Models/store.model';

import { Trip } from '../models/trip.model';

interface CustomersSelectors {
  selectCustomersAllTrips(state: State): Trip[];
  selectCustomersPending(state: State): boolean;
}

export const customersSelectors: CustomersSelectors = {
  selectCustomersAllTrips: (state: State): Trip[] => state.customers.trips,
  selectCustomersPending: (state: State): boolean => state.customers.pending,
};
