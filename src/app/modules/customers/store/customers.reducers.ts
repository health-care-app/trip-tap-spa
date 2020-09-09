import { ActionReducer, createReducer, on } from '@ngrx/store';

import { SetPendingActionType } from '@Types/pending-action.types';

import { GetAllTripsSuccessActionType, GetTripSuccessActionType } from '../types/action.types';
import { CustomersActionsTypes, getAllTrips, getAllTripsSuccess, getTrip, getTripSuccess, setPendingState } from './customers.actions';
import { CustomersState } from './customers.state';

export const customersInitialState: CustomersState = {
  trip: null,
  trips: [],
  pending: false,
};

export const customersReducer: ActionReducer<CustomersState> = createReducer(
  customersInitialState,
  on(setPendingState, (state: CustomersState, action: SetPendingActionType<CustomersActionsTypes.Pending>): CustomersState => ({
    ...state,
    pending: action.isPending,
  })),
  on(getAllTrips, (state: CustomersState): CustomersState => ({
    ...state,
    pending: true,
  })),
  on(getAllTripsSuccess, (state: CustomersState, action: GetAllTripsSuccessActionType): CustomersState => ({
    ...state,
    trips: action.trips,
  })),
  on(getTrip, (state: CustomersState): CustomersState => ({
    ...state,
    pending: true,
  })),
  on(getTripSuccess, (state: CustomersState, action: GetTripSuccessActionType): CustomersState => ({
    ...state,
    trip: action.trip,
  })),
);
