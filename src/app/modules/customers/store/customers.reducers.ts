import { ActionReducer, createReducer, on } from '@ngrx/store';

import { SetPendingActionType } from '@Types/pending-action.types';

import { GetAllTripsSuccessActionType } from '../types/action.types';
import { CustomersActionsTypes, getAllTrips, getAllTripsSuccess, setPendingState } from './customers.actions';
import { CustomersState } from './customers.state';

export const customersInitialState: CustomersState = {
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
);
