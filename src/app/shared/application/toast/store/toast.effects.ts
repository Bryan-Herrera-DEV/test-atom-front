import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { toast } from 'ngx-sonner';
import { tap } from 'rxjs/operators';
import * as ToastActions from './toast.actions';

@Injectable({ providedIn: 'root' })
export class ToastEffects {
  constructor(private readonly actions$: Actions) {}

  private readonly showToast$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(
          ToastActions.showSuccessToast,
          ToastActions.showWarnToast,
          ToastActions.showErrorToast,
          ToastActions.showInfoToast,
        ),
        tap((action) => this.showToast(action)),
      ),
    { dispatch: false },
  );

  private showToast(action: any) {
    const { message, description } = action;
    const toastOptions = { description };

    switch (action.type) {
      case ToastActions.showSuccessToast.type:
        toast.success(message, toastOptions);
        break;
      case ToastActions.showWarnToast.type:
        toast.warning(message, toastOptions);
        break;
      case ToastActions.showErrorToast.type:
        toast.error(message, toastOptions);
        break;
      case ToastActions.showInfoToast.type:
        toast.info(message, toastOptions);
        break;
    }
  }
}
