import {Action} from '@ngrx/store';

export enum AuthActionsEnum {
  LOGIN = '[Auth] LOGIN',
  LOGOUT = '[Auth] LOGOUT',
  LOGIN_START = '[Auth] LOGIN_START',
  SIGNUP = '[Auth] SIGNUP',
  LOGIN_FAIL = '[Auth] LOGIN_FAIL'
}

export class Login implements Action {
  readonly type = AuthActionsEnum.LOGIN;

  constructor(public payload: {
    email: string,
    userId: string,
    token: string,
    expirationDate: Date
  }) {
  }
}

export class Logout implements Action {
  readonly type = AuthActionsEnum.LOGOUT;
}

export class LoginStart implements Action {
  readonly type = AuthActionsEnum.LOGIN_START;

  constructor(public payload: { email: string, password: string }) {
  }
}

export class LoginFail implements Action {
  readonly type = AuthActionsEnum.LOGIN_FAIL;

  constructor(public payload: string) {}

}

export type AuthActions = Login | Logout | LoginFail | LoginStart;
