import { TypedActionProps } from '@Types/action.types';

import { ProfileProps } from '../models/action-props.model';
import { AuthActionsTypes } from '../store/auth.actions';

export type SignInSuccessActionType = TypedActionProps<AuthActionsTypes.SignInSuccess, ProfileProps>;
export type SignUpSuccessActionType = TypedActionProps<AuthActionsTypes.SignUpSuccess, ProfileProps>;
