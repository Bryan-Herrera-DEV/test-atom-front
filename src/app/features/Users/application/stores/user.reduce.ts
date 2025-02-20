import { createReducer, on } from '@ngrx/store';
import { UserProps } from '../../domain/User';
import {
  createUser,
  createUserError,
  createUserSuccess,
  getUser,
  getUserError,
  getUserSuccess,
  logoutUser,
} from './user.actions';

export interface UserState {
  user: UserProps | null;
  loading: boolean;
  error: Error | null;
}

export const initialState: UserState = {
  user: null,
  loading: false,
  error: null,
};

export const userReducer = createReducer(
  initialState,
  // Obtener usuario
  on(getUser, (state) => ({ ...state, loading: true, error: null })),
  on(getUserSuccess, (state, { user }) => ({
    ...state,
    user,
    loading: false,
    error: null,
  })),
  on(getUserError, (state, { error }) => ({ ...state, loading: false, error })),

  // Crear usuario
  on(createUser, (state) => ({ ...state, loading: true, error: null })),
  on(createUserSuccess, (state, { user }) => ({
    ...state,
    user,
    loading: false,
    error: null,
  })),
  on(createUserError, (state, { error }) => ({
    ...state,
    loading: false,
    error,
  })),

  on(logoutUser, () => ({
    ...initialState,
  })),
);
