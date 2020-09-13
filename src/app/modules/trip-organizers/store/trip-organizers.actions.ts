// tslint:disable: max-line-length
import { createAction, props } from '@ngrx/store';

import { PendingProps } from '@Models/pending-props.model';
import { ActionCreatorPropsType, ActionCreatorType } from '@Types/action.types';

import { TripsProps } from '../models/action-props.model';

export enum TripOrganizersActionsTypes {
  Pending = '[Trip Organizers] PENDING',

  GetAllTrips = '[Trip Organizers] GET_ALL_TRIPS',
  GetAllTripsSuccess = '[Trip Organizers] GET_ALL_TRIPS_SUCCESS',
}

export const setPendingState: ActionCreatorPropsType<TripOrganizersActionsTypes.Pending, PendingProps> = createAction(TripOrganizersActionsTypes.Pending, props<PendingProps>());

export const getAllTrips: ActionCreatorType<TripOrganizersActionsTypes.GetAllTrips> = createAction(TripOrganizersActionsTypes.GetAllTrips);
export const getAllTripsSuccess: ActionCreatorPropsType<TripOrganizersActionsTypes.GetAllTripsSuccess, TripsProps> = createAction(TripOrganizersActionsTypes.GetAllTripsSuccess, props<TripsProps>());
