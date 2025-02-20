import { Injectable, signal, WritableSignal } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import {
  messageTypeEnum,
  ShowToastUseCase,
} from '../../../../shared/application/toast/use-case/show-toast.use-case';
import { UseCase } from '../../../../shared/domain/core/UseCase';
import { NgRxUtilities } from '../../../../shared/domain/utils/NgRxUtilities.service';
import {
  createUser,
  createUserError,
  createUserSuccess
} from '../stores/user.actions';
import { UserState } from '../stores/user.reduce';
import { selectUserLoading } from '../stores/user.selector';

interface CreateUserInput {
  name: string;
  lastName: string;
  email: string;
}
@Injectable({
  providedIn: 'root',
})
export class CreateUserUseCase implements UseCase<CreateUserInput, void> {
  private readonly _loading: WritableSignal<boolean> = signal<boolean>(false);
  private readonly loadingFromStore$: Observable<boolean>;

  constructor(
    private readonly store: Store<UserState>,
    private readonly toast: ShowToastUseCase,
    private readonly ngRxUtilities: NgRxUtilities,
  ) {
    this.loadingFromStore$ = this.store.select(selectUserLoading);

    this.loadingFromStore$.subscribe((isLoading) => {
      this._loading.set(isLoading);
    });
  }

  execute({ email, lastName, name }: CreateUserInput) {
    this.store.dispatch(createUser({ email, lastName, name }));
    this.handleNgRxActions();
  }
  private handleNgRxActions() {
    this.ngRxUtilities.handleActions(
      [createUserSuccess],
      () => this.onSuccess(),
      () => this.onFailure(),
      [createUserError],
    );
  }

  private onSuccess() {
    this.toast.execute({
      messageType: messageTypeEnum.SUCCESS,
      toastData: {
        message: 'Usuario creado con éxito',
      },
    });
  }

  private onFailure() {
    this.toast.execute({
      messageType: messageTypeEnum.ERROR,
      toastData: {
        message: 'Error al crear usuario',
      },
    });
  }
  get loadingSignal(): WritableSignal<boolean> {
    return this._loading;
  }
}
