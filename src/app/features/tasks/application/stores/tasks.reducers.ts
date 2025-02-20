import { createReducer, on } from '@ngrx/store';
import { TaskProps } from '../../domain/Task';
import {
  createTask,
  createTaskError,
  createTaskSuccess,
  getTask,
  getTaskError,
  getTaskSuccess,
} from './tasks.actions';

export interface TaskState {
  tasks: TaskProps[];
  loading: boolean;
  error: Error | null;
}

// Estado inicial
export const initialState: TaskState = {
  tasks: [],
  loading: false,
  error: null,
};

export const tasksReducer = createReducer(
  initialState,

  on(getTask, (state) => ({
    ...state,
    loading: true,
    error: null,
  })),

  on(getTaskSuccess, (state, { tasks }) => ({
    ...state,
    tasks,
    loading: false,
    error: null,
  })),

  on(getTaskError, (state, { error }) => ({
    ...state,
    loading: false,
    error,
  })),

  on(createTask, (state) => ({
    ...state,
    loading: true,
    error: null,
  })),

  on(createTaskSuccess, (state, { task }) => ({
    ...state,
    tasks: [...state.tasks, task],
    loading: false,
    error: null,
  })),

  on(createTaskError, (state, { error }) => ({
    ...state,
    loading: false,
    error,
  })),
);
