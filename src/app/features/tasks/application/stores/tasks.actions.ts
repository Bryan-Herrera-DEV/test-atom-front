import { createAction, props } from '@ngrx/store';
import { TaskProps } from '../../domain/Task';

export const GET_TASK = '[Task] Get Task';
export const GET_TASK_SUCCESS = '[Task] Get Task Success';
export const GET_TASK_ERROR = '[Task] Get Task Error';

export const getTask = createAction(GET_TASK, props<{ userEmaill: string }>());
export const getTaskSuccess = createAction(GET_TASK_SUCCESS, props<{ tasks: TaskProps[] }>());
export const getTaskError = createAction(
  GET_TASK_ERROR,
  props<{ error: Error }>(),
);
