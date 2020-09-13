import { TypedActionProps } from '@Types/action.types';

import { TripsProps } from '../models/action-props.model';
import { TripOrganizersActionsTypes } from '../store/trip-organizers.actions';

export type GetAllTripsSuccessActionType = TypedActionProps<TripOrganizersActionsTypes.GetAllTripsSuccess, TripsProps>;
