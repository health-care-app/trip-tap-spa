import { TypedActionProps } from '@Types/action.types';

import { TripsProps } from '../models/action-props.model';
import { CustomersActionsTypes } from '../store/customers.actions';

export type GetAllTripsSuccessActionType = TypedActionProps<CustomersActionsTypes.GetAllTripsSuccess, TripsProps>;
