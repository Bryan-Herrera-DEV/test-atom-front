import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { UseCase } from '../../../domain/core/UseCase';
import { IToastData, showErrorToast, showInfoToast, showSuccessToast, showWarnToast } from '../store/toast.actions';

export enum messageTypeEnum {
  SUCCESS = 'success',
  ERROR = 'error',
  WARNING = 'warning',
  INFO = 'info',
}

interface UseCaseProps {
  toastData: IToastData;
  messageType: messageTypeEnum;
}

@Injectable({
  providedIn: 'root',
})
export class ShowToastUseCase
  implements UseCase<UseCaseProps, void>
{
  constructor(private readonly store: Store) {}

  execute({ toastData, messageType }: UseCaseProps): void {
    ({
      [messageTypeEnum.SUCCESS]: () =>
        this.store.dispatch(showSuccessToast(toastData)),
      [messageTypeEnum.ERROR]: () =>
        this.store.dispatch(showErrorToast(toastData)),
      [messageTypeEnum.WARNING]: () =>
        this.store.dispatch(showWarnToast(toastData)),
      [messageTypeEnum.INFO]: () =>
        this.store.dispatch(showInfoToast(toastData)),
    })[messageType]();
  }
}
