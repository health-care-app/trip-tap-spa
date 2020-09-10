import { TypedActionProps } from '@Types/action.types';

import { TripProps, TripsProps } from '../models/action-props.model';
import { CustomersActionsTypes } from '../store/customers.actions';

export type GetAllTripsSuccessActionType = TypedActionProps<CustomersActionsTypes.GetAllTripsSuccess, TripsProps>;
export type GetTripSuccessActionType = TypedActionProps<CustomersActionsTypes.GetTripSuccess, TripProps>;
