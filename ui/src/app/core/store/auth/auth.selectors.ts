import { createSelector } from '@ngrx/store';
import { AppState } from '..';
import { AuthState } from '.';

export const selectAuthState = (state: AppState.State): AuthState.State => {
  return state.auth;
};

export const selectIsAuthenticated = createSelector(
  selectAuthState,
  (authState: AuthState.State) => {
    return authState.authenticated;
  }
);
