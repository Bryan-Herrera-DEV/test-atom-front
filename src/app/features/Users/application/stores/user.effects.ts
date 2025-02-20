// user.effects.ts
import { Inject, Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import { IUserRepository } from '../../domain/user.repository';
import {
  createUser,
  createUserError,
  createUserSuccess,
  getUser,
  getUserError,
  getUserSuccess,
} from './user.actions';

@Injectable()
export class UserEffects {
  constructor(
    private readonly actions$: Actions,
    @Inject('IUserRepository') private readonly userService: IUserRepository,
  ) {}

  getUser$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getUser),
      switchMap((action) =>
        this.userService.getUser(action.email).pipe(
          map((user) => getUserSuccess({ user })),
          catchError((error) => of(getUserError({ error }))),
        ),
      ),
    ),
  );

  createUser$ = createEffect(() =>
    this.actions$.pipe(
      ofType(createUser),
      switchMap((action) =>
        this.userService.createUser(action).pipe(
          map((user) => createUserSuccess({ user })),
          catchError((error) => of(createUserError({ error }))),
        ),
      ),
    ),
  );
}
