import { ActionReducerMap } from '@ngrx/store';
import {
  userReducer,
  UserState,
} from '../../../features/Users/application/stores/user.reduce';
import {
  tasksReducer,
  TaskState,
} from '../../../features/tasks/application/stores/tasks.reducers';

export interface AppState {
  user: UserState;
  tasks: TaskState;
}

export const reducers: ActionReducerMap<AppState> = {
  user: userReducer,
  tasks: tasksReducer,
};
