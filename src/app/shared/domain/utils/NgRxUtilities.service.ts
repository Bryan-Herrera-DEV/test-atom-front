import { Injectable } from '@angular/core';
import { Actions, ofType } from '@ngrx/effects';
import { Action, ActionCreator } from '@ngrx/store';
import { take } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class NgRxUtilities {
  constructor(
    private readonly actions$: Actions,
  ) {}

  handleActions(
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    successActions: ActionCreator<string, (props?: any) => Action>[],
    onSuccess: () => void,
    onError?: (e?: string) => void,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    errorActions?: ActionCreator<string, (props?: any) => Action>[],
  ) {
    this.actions$
      .pipe(ofType(...successActions, ...(errorActions || [])), take(1))
      .subscribe((action: any) => {
        if (successActions.some((a) => a.type === action.type)) {
          onSuccess?.();
        } else if (
          errorActions?.some((a) => a.type === action.type)
        ) {
          onError?.(action.error);
        }
      });
  }
}
