// tslint:disable: max-line-length
import { createAction, props } from '@ngrx/store';

import { PendingProps } from '@Models/pending-props.model';
import { ActionCreatorPropsType } from '@Types/action.types';

import { GetAllTripsProps, GetTripProps, TripProps, TripsProps } from '../models/action-props.model';

export enum CustomersActionsTypes {
  Pending = '[Customers] PENDING',

  GetAllTrips = '[Customers] GET_ALL_TRIPS',
  GetAllTripsSuccess = '[Customers] GET_ALL_TRIPS_SUCCESS',

  GetTrip = '[Customers] GET_TRIP',
  GetTripSuccess = '[Customers] GET_TRIP_SUCCESS',
}

export const setPendingState: ActionCreatorPropsType<CustomersActionsTypes.Pending, PendingProps> = createAction(CustomersActionsTypes.Pending, props<PendingProps>());

export const getAllTrips: ActionCreatorPropsType<CustomersActionsTypes.GetAllTrips, GetAllTripsProps> = createAction(CustomersActionsTypes.GetAllTrips, props<GetAllTripsProps>());
export const getAllTripsSuccess: ActionCreatorPropsType<CustomersActionsTypes.GetAllTripsSuccess, TripsProps> = createAction(CustomersActionsTypes.GetAllTripsSuccess, props<TripsProps>());

export const getTrip: ActionCreatorPropsType<CustomersActionsTypes.GetTrip, GetTripProps> = createAction(CustomersActionsTypes.GetTrip, props<GetTripProps>());
export const getTripSuccess: ActionCreatorPropsType<CustomersActionsTypes.GetTripSuccess, TripProps> = createAction(CustomersActionsTypes.GetTripSuccess, props<TripProps>());
