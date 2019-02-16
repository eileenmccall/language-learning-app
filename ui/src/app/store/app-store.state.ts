import { AuthState } from './auth';
import { ActionReducerMap, MetaReducer } from '@ngrx/store';
import { environment } from '@env/environment.prod';

export interface State {
  auth: AuthState.State;
}

// export const reducers: ActionReducerMap<State> = {
// };


// export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
