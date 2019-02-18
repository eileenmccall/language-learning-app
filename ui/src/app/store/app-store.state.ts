import { AuthState } from './auth';
import { ActionReducerMap, MetaReducer } from '@ngrx/store';
import { environment } from '@env/environment.prod';
import { storeFreeze } from 'ngrx-store-freeze';
import { routerReducer, RouterReducerState } from '@ngrx/router-store';
import { authReducer } from './auth/auth.reducer';
import { RouterStateUrl } from './router/route.serializer';

export interface State {
  auth: AuthState.State;
  router: RouterReducerState<RouterStateUrl>;
}

// export const reducers: ActionReducerMap<State> = {
//   auth: authReducer,
//   router: routerReducer
// };

// export const metaReducers: MetaReducer<State>[] = !environment.production ? [storeFreeze] : [];
