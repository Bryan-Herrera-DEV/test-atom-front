import { Injectable, signal, WritableSignal } from "@angular/core";
import { Store } from "@ngrx/store";
import { Observable } from "rxjs";
import { UseCase } from "../../../../shared/domain/core/UseCase";
import { UserProps } from "../../domain/User";
import { getUser } from "../stores/user.actions";
import { UserState } from "../stores/user.reduce";
import { selectCurrentUser } from "../stores/user.selector";

interface CreateUserInput {
  name: string;
  lastName: string;
  email: string;
}

@Injectable({
  providedIn: 'root',
})
export class GetUserUseCase implements UseCase<string, UserProps | null> {
  private readonly _user: WritableSignal<UserProps | null> = signal<UserProps | null>(null);
  private readonly userFromStore$: Observable<UserProps | null>;

  constructor(private readonly store: Store<UserState>) {
    this.userFromStore$ = this.store.select(selectCurrentUser);

    this.userFromStore$.subscribe((user) => {
      this._user.set(user);
    });
  }
  execute(email: string): Observable<UserProps | null> {
    this.store.dispatch(getUser({ email }));
    return this.userFromStore$;
  }
  get userSignal(): WritableSignal<UserProps | null> {
    return this._user;
  }
}
