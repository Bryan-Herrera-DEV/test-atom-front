import { Injectable, signal, WritableSignal } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import {
  messageTypeEnum,
  ShowToastUseCase,
} from '../../../../shared/application/toast/use-case/show-toast.use-case';
import { UseCase } from '../../../../shared/domain/core/UseCase';
import { NgRxUtilities } from '../../../../shared/domain/utils/NgRxUtilities.service';
import { TaskProps } from '../../domain/Task';
import {
  createTask,
  createTaskError,
  createTaskSuccess,
} from '../stores/tasks.actions';
import { TaskState } from '../stores/tasks.reducers';
import { selectTaskLoading } from '../stores/tasks.selectors';

@Injectable({
  providedIn: 'root',
})
export class CreateTaskUseCase implements UseCase<TaskProps, void> {
  private readonly _loading: WritableSignal<boolean> = signal<boolean>(false);
  private readonly loadingFromStore$: Observable<boolean>;

  constructor(
    private readonly store: Store<TaskState>,
    private readonly ngRxUtils: NgRxUtilities,
    private readonly showToastUseCase: ShowToastUseCase,
  ) {
    this.loadingFromStore$ = this.store.select(selectTaskLoading);
    this.loadingFromStore$.subscribe((isLoading) => {
      this._loading.set(isLoading);
    });
  }

  execute(input: TaskProps) {
    this.store.dispatch(createTask({ task: input }));
    this.onContinue();
  }
  onContinue() {
    this.ngRxUtils.handleActions(
      [createTaskSuccess],
      () => this.onSuccess(),
      () => this.onError(),
      [createTaskError],
    );
  }
  onSuccess() {
    this.showToastUseCase.execute({
      messageType: messageTypeEnum.SUCCESS,
      toastData: {
        message: 'Tarea Creada con éxito',
      },
    });
  }

  onError() {
    this.showToastUseCase.execute({
      messageType: messageTypeEnum.ERROR,
      toastData: {
        message: 'Error al crear la tarea',
      },
    });
  }
}
