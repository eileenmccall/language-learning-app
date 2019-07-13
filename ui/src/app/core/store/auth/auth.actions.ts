import { Action } from '@ngrx/store';
import { User } from '@app/core/models/user.model';

export enum AuthActionTypes {
  Login = '[Auth] LOGIN',
  Logout = '[Auth] LOGOUT'
}

export class Login implements Action {
  readonly type = AuthActionTypes.Login;

  constructor(public payload: User) {}
}

export class Logout implements Action {
  readonly type = AuthActionTypes.Logout;
}


export type AuthActions = Login | Logout;
