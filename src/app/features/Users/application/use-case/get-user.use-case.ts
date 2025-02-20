import { Injectable, signal, WritableSignal } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import {
  messageTypeEnum,
  ShowToastUseCase,
} from '../../../../shared/application/toast/use-case/show-toast.use-case';
import { UseCase } from '../../../../shared/domain/core/UseCase';
import { NgRxUtilities } from '../../../../shared/domain/utils/NgRxUtilities.service';
import { UserProps } from '../../domain/User';
import { getUser, getUserError, getUserSuccess } from '../stores/user.actions';
import { UserState } from '../stores/user.reduce';
import { selectCurrentUser, selectUserLoading } from '../stores/user.selector';

interface CreateUserInput {
  name: string;
  lastName: string;
  email: string;
}

@Injectable({
  providedIn: 'root',
})
export class GetUserUseCase implements UseCase<string, UserProps | null> {
  private readonly _user: WritableSignal<UserProps | null> =
    signal<UserProps | null>(null);

  private readonly _loading: WritableSignal<boolean> = signal<boolean>(false);

  private readonly userFromStore$: Observable<UserProps | null>;
  private readonly loadingFromStore$: Observable<boolean>;

  constructor(
    private readonly store: Store<UserState>,
    private readonly toast: ShowToastUseCase,
    private readonly ngRxUtilities: NgRxUtilities,
    private readonly router: Router,
  ) {
    this.userFromStore$ = this.store.select(selectCurrentUser);

    this.loadingFromStore$ = this.store.select(selectUserLoading);

    this.userFromStore$.subscribe((user) => {
      this._user.set(user);
    });

    this.loadingFromStore$.subscribe((isLoading) => {
      this._loading.set(isLoading);
    });
  }

  execute(email: string): Observable<UserProps | null> {
    this.store.dispatch(getUser({ email }));
    this.handleNgRxActions();
    return this.userFromStore$;
  }
  private handleNgRxActions() {
    this.ngRxUtilities.handleActions(
      [getUserSuccess],
      () => this.onSuccess(),
      () => this.onFailure(),
      [getUserError],
    );
  }

  private onSuccess() {
    this.toast.execute({
      messageType: messageTypeEnum.SUCCESS,
      toastData: {
        message: 'Usuario logueado con éxito',
      },
    });
    this.router.navigate(['/dashboard']);
  }

  private onFailure() {
    this.toast.execute({
      messageType: messageTypeEnum.ERROR,
      toastData: {
        message: 'Error al loguear usuario',
      },
    });
  }
  get userSignal(): UserProps | null {
    return this._user();
  }
  get loadingSignal(): WritableSignal<boolean> {
    return this._loading;
  }
}
