import { Injectable, signal, WritableSignal } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { UseCase } from '../../../../shared/domain/core/UseCase';
import { GetUserUseCase } from '../../../Users/application/use-case/get-user.use-case';
import { TaskProps, TTaskType } from '../../domain/Task';
import { getTask } from '../stores/tasks.actions';
import { TaskState } from '../stores/tasks.reducers';
import { selectAllTasks, selectTaskLoading } from '../stores/tasks.selectors';

@Injectable({
  providedIn: 'root',
})
export class GetTaskByUserIdUseCase implements UseCase<null, TaskProps[]> {
  private readonly _tasks: WritableSignal<TaskProps[]> = signal<TaskProps[]>(
    [],
  );

  private readonly _loading: WritableSignal<boolean> = signal<boolean>(false);

  private readonly tasksFromStore$: Observable<TaskProps[]>;
  private readonly loadingFromStore$: Observable<boolean>;

  constructor(
    private readonly store: Store<TaskState>,
    private readonly getUserUseCase: GetUserUseCase,
  ) {
    this.tasksFromStore$ = this.store.select(selectAllTasks);

    this.loadingFromStore$ = this.store.select(selectTaskLoading);

    this.tasksFromStore$.subscribe((task) => {
      this._tasks.set(task);
    });

    this.loadingFromStore$.subscribe((isLoading) => {
      this._loading.set(isLoading);
    });
  }

  execute(): Observable<TaskProps[]> {
    const userEmaill = this.getUserUseCase.userSignal?.email ?? '';
    this.store.dispatch(getTask({ userEmaill }));
    return this.tasksFromStore$;
  }

  get taskSignal(): TaskProps[] {
    return this._tasks();
  }
  get loadingSignal(): WritableSignal<boolean> {
    return this._loading;
  }

  get forTypeGroped(): Record<TTaskType, TaskProps[]> {
    return Object.groupBy(this.taskSignal, (task) => task.type) as Record<
      TTaskType,
      TaskProps[]
    >;
  }
}
