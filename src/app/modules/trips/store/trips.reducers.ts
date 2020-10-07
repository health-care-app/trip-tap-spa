import { ActionReducer, createReducer, on } from '@ngrx/store';

import { SetPendingActionType } from '@Types/pending-action.types';

import { GetTripsListSuccessActionType, GetTripSuccessActionType } from '../types/action.types';
import {
  createTrip,
  createTripSuccess,
  getAllTrips,
  getAllTripsSuccess,
  getTrip,
  getTripSuccess,
  setPendingState,
  TripsActionsTypes,
} from './trips.actions';
import { TripsState } from './trips.state';

export const tripsInitialState: TripsState = {
  single: null,
  list: [],
  pending: false,
};

export const tripsReducer: ActionReducer<TripsState> = createReducer(
  tripsInitialState,
  on(setPendingState, (state: TripsState, action: SetPendingActionType<TripsActionsTypes.Pending>): TripsState => ({
    ...state,
    pending: action.isPending,
  })),
  on(
    getTrip,
    createTrip,
    getAllTrips,
    (state: TripsState): TripsState => ({
      ...state,
      pending: true,
    }),
  ),
  on(getAllTripsSuccess, (state: TripsState, action: GetTripsListSuccessActionType): TripsState => ({
    ...state,
    list: action.trips,
  })),
  on(
    getTripSuccess,
    createTripSuccess,
    (state: TripsState, action: GetTripSuccessActionType): TripsState => ({
      ...state,
      single: action.trip,
    }),
  ),
);
