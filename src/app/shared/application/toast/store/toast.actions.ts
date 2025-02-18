import { createAction, props } from '@ngrx/store';

export interface IToastData {
  message: string;
  description?: string;
  arrayErrors?: string[];
}

export const showSuccessToast = createAction(
  '[Toast] Show Success Toast',
  props<IToastData>()
);

export const showWarnToast = createAction(
  '[Toast] Show Warn Toast',
  props<IToastData>()
);

export const showErrorToast = createAction(
  '[Toast] Show Error Toast',
  props<IToastData>()
);

export const showInfoToast = createAction(
  '[Toast] Show Info Toast',
  props<IToastData>()
);
