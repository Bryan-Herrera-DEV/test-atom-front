import { createAction, props } from '@ngrx/store';
import { UserProps } from '../../domain/User';

export const GET_USER = '[User] Get User';
export const GET_USER_SUCCESS = '[User] Get User Success';
export const GET_USER_ERROR = '[User] Get User Error';

export const CREATE_USER = '[User] Create User';
export const CREATE_USER_SUCCESS = '[User] Create User Success';
export const CREATE_USER_ERROR = '[User] Create User Error';

export const LOGOUT_USER = '[User] Logout User';

export const getUser = createAction(GET_USER, props<{ email: string }>());
export const getUserSuccess = createAction(GET_USER_SUCCESS, props<{ user: UserProps }>());
export const getUserError = createAction(
  GET_USER_ERROR,
  props<{ error: Error }>(),
);

export const createUser = createAction(
  CREATE_USER,
  props<{ name: string; lastName: string; email: string }>(),
);
export const createUserSuccess = createAction(CREATE_USER_SUCCESS, props<{ user: UserProps }>());
export const createUserError = createAction(
  CREATE_USER_ERROR,
  props<{ error: Error }>(),
);

export const logoutUser = createAction(LOGOUT_USER);
