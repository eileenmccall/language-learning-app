import {
  AuthActions,
  AuthActionTypes
} from './auth.actions';

import { State as AuthState } from './auth.state';
import { initialState as initialAuthState } from './auth.state';

export function authReducer(
  state: AuthState = initialAuthState,
  action: AuthActions
): AuthState {
  switch (action.type) {
    case AuthActionTypes.Login:
      return {
        ...state,
        authenticated: true,
        user: action.payload
      };

    default:
      return state;
  }
}
