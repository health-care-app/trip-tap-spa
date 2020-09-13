import { TypedActionProps } from '@Types/action.types';

import { TripProps, TripsProps } from '../models/action-props.model';
import { TripsActionsTypes } from '../store/trips.actions';

export type GetTripsListSuccessActionType = TypedActionProps<TripsActionsTypes.GetTripsListSuccess, TripsProps>;
export type GetTripSuccessActionType = TypedActionProps<TripsActionsTypes.GetTripSuccess, TripProps>;
