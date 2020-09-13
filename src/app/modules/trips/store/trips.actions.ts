// tslint:disable: max-line-length
import { createAction, props } from '@ngrx/store';

import { PendingProps } from '@Models/pending-props.model';
import { ActionCreatorPropsType } from '@Types/action.types';

import { GetTripProps, GetTripsListProps, TripProps, TripsProps } from '../models/action-props.model';

export enum TripsActionsTypes {
  Pending = '[Trips] PENDING',

  GetTripsList = '[Trips] GET_TRIPS_LIST',
  GetTripsListSuccess = '[Trips] GET_TRIPS_LIST_SUCCESS',

  GetTrip = '[Trips] GET_TRIP',
  GetTripSuccess = '[Trips] GET_TRIP_SUCCESS',
}

export const setPendingState: ActionCreatorPropsType<TripsActionsTypes.Pending, PendingProps> = createAction(TripsActionsTypes.Pending, props<PendingProps>());

export const getAllTrips: ActionCreatorPropsType<TripsActionsTypes.GetTripsList, GetTripsListProps> = createAction(TripsActionsTypes.GetTripsList, props<GetTripsListProps>());
export const getAllTripsSuccess: ActionCreatorPropsType<TripsActionsTypes.GetTripsListSuccess, TripsProps> = createAction(TripsActionsTypes.GetTripsListSuccess, props<TripsProps>());

export const getTrip: ActionCreatorPropsType<TripsActionsTypes.GetTrip, GetTripProps> = createAction(TripsActionsTypes.GetTrip, props<GetTripProps>());
export const getTripSuccess: ActionCreatorPropsType<TripsActionsTypes.GetTripSuccess, TripProps> = createAction(TripsActionsTypes.GetTripSuccess, props<TripProps>());
