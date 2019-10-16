import {User} from '../user.model';
import {AuthActions, AuthActionsEnum} from './auth.actions';
import {act} from '@ngrx/effects';

export interface AuthState {
  user: User;
  authError: string;
  loading: boolean;
}

const initialState: AuthState = {
  user: null,
  authError: null,
  loading: false
};

export function authReducer(state = initialState, action: AuthActions) {
  switch (action.type) {
    case AuthActionsEnum.LOGIN:
      const user = new User(action.payload.email, action.payload.userId, action.payload.token, action.payload.expirationDate);
      return {
        ...state,
        authError: null,
        user,
        loading: true
      };
    case AuthActionsEnum.LOGOUT:
      return {
        ...state,
        user: null
      };
    case AuthActionsEnum.LOGIN_START:
      return {
        ...state,
        authError: null,
        loading: true
      };
    case AuthActionsEnum.LOGIN_FAIL:
      return {
        ...state,
        user: null,
        authError: action.payload,
        loading: false
      }
    default:
      return state;
  }
}
