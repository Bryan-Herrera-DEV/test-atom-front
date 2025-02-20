// task.effects.ts
import { Inject, Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import { ITaskRepository } from '../../domain/tasks.repository';
import {
  createTask,
  createTaskError,
  createTaskSuccess,
  getTask,
  getTaskError,
  getTaskSuccess,
} from './tasks.actions';

@Injectable()
export class TaskEffects {
  constructor(
    private readonly actions$: Actions,
    @Inject('ITaskRepository') private readonly taskService: ITaskRepository,
  ) {}

  getTask$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getTask),
      switchMap((action) =>
        this.taskService.getTask(action.userEmaill).pipe(
          map((tasks) => getTaskSuccess({ tasks })),
          catchError((error) => of(getTaskError({ error }))),
        ),
      ),
    ),
  );

  createTask$ = createEffect(() =>
    this.actions$.pipe(
      ofType(createTask),
      switchMap((action) =>
        this.taskService.createTask(action.task).pipe(
          map((task) => createTaskSuccess({ task })),
          catchError((error) => of(createTaskError({ error }))),
        ),
      ),
    ),
  );
}
