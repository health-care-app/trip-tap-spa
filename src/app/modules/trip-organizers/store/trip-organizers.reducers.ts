import { ActionReducer, createReducer, on } from '@ngrx/store';

import { SetPendingActionType } from '@Types/pending-action.types';

import { GetAllTripsSuccessActionType } from '../types/action.types';
import { getAllTrips, getAllTripsSuccess, setPendingState, TripOrganizersActionsTypes } from './trip-organizers.actions';
import { TripOrganizersState } from './trip-organizers.state';

export const tripOrganizersInitialState: TripOrganizersState = {
  trips: [],
  pending: false,
};

export const tripOrganizersReducer: ActionReducer<TripOrganizersState> = createReducer(
  tripOrganizersInitialState,
  on(
    setPendingState,
    (state: TripOrganizersState, action: SetPendingActionType<TripOrganizersActionsTypes.Pending>): TripOrganizersState => ({
      ...state,
      pending: action.isPending,
    }),
  ),
  on(getAllTrips, (state: TripOrganizersState): TripOrganizersState => ({
    ...state,
    pending: true,
  })),
  on(getAllTripsSuccess, (state: TripOrganizersState, action: GetAllTripsSuccessActionType): TripOrganizersState => ({
    ...state,
    trips: action.trips,
  })),
);
