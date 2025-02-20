import { createAction, props } from '@ngrx/store';
import { TaskProps } from '../../domain/Task';

export const GET_TASK = '[Task] Get Task';
export const GET_TASK_SUCCESS = '[Task] Get Task Success';
export const GET_TASK_ERROR = '[Task] Get Task Error';

export const CREATE_TASK = '[Task] Create Task';
export const CREATE_TASK_SUCCESS = '[Task] Create Task Success';
export const CREATE_TASK_ERROR = '[Task] Create Task Error';

export const createTask = createAction(
  CREATE_TASK,
  props<{ task: TaskProps }>()
);

export const createTaskSuccess = createAction(
  CREATE_TASK_SUCCESS,
  props<{ task: TaskProps }>()
);

export const createTaskError = createAction(
  CREATE_TASK_ERROR,
  props<{ error: Error }>()
);

export const getTask = createAction(GET_TASK, props<{ userEmaill: string }>());
export const getTaskSuccess = createAction(GET_TASK_SUCCESS, props<{ tasks: TaskProps[] }>());
export const getTaskError = createAction(
  GET_TASK_ERROR,
  props<{ error: Error }>(),
);
