import { AuthState } from './auth';
import { ActionReducerMap, MetaReducer } from '@ngrx/store';
import { environment } from '@env/environment.prod';
import { storeFreeze } from 'ngrx-store-freeze';

export interface State {
  auth: AuthState.State;
}

export const metaReducers: MetaReducer<State>[] = !environment.production ? [storeFreeze] : [];
