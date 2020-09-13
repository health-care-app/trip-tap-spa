// tslint:disable: max-line-length
import { createAction, props } from '@ngrx/store';

import { PendingProps } from '@Models/pending-props.model';
import { ActionCreatorPropsType, ActionCreatorType } from '@Types/action.types';

import { GetTripProps, TripProps, TripsProps } from '../models/action-props.model';

export enum CustomersActionsTypes {
  Pending = '[Customers] PENDING',

  GetAllTrips = '[Customers] GET_ALL_TRIPS',
  GetAllTripsSuccess = '[Customers] GET_ALL_TRIPS_SUCCESS',

  GetTrip = '[Customers] GET_TRIP',
  GetTripSuccess = '[Customers] GET_TRIP_SUCCESS',
}

export const setPendingState: ActionCreatorPropsType<CustomersActionsTypes.Pending, PendingProps> = createAction(CustomersActionsTypes.Pending, props<PendingProps>());

export const getAllTrips: ActionCreatorType<CustomersActionsTypes.GetAllTrips> = createAction(CustomersActionsTypes.GetAllTrips);
export const getAllTripsSuccess: ActionCreatorPropsType<CustomersActionsTypes.GetAllTripsSuccess, TripsProps> = createAction(CustomersActionsTypes.GetAllTripsSuccess, props<TripsProps>());

export const getTrip: ActionCreatorPropsType<CustomersActionsTypes.GetTrip, GetTripProps> = createAction(CustomersActionsTypes.GetTrip, props<GetTripProps>());
export const getTripSuccess: ActionCreatorPropsType<CustomersActionsTypes.GetTripSuccess, TripProps> = createAction(CustomersActionsTypes.GetTripSuccess, props<TripProps>());
