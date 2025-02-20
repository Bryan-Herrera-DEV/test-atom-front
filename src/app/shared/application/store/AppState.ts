import { ActionReducerMap } from '@ngrx/store';
import { userReducer, UserState } from '../../../features/Users/application/stores/user.reduce';

export interface AppState {
  user: UserState;
}

export const reducers: ActionReducerMap<AppState> = {
  user: userReducer
};
