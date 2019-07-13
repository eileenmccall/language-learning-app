import { User } from '@app/core/models/user.model';

export interface State {
  authenticated: boolean;
  user: User | null;
}

export const initialState: State = {
  authenticated: false,
  user: null
};
