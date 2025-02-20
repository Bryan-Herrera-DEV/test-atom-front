import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Store } from "@ngrx/store";
import { messageTypeEnum, ShowToastUseCase } from "../../../../shared/application/toast/use-case/show-toast.use-case";
import { UseCase } from "../../../../shared/domain/core/UseCase";
import { logoutUser } from "../stores/user.actions";
import { UserState } from "../stores/user.reduce";

@Injectable({
  providedIn: 'root',
})
export class LogoutUseCase implements UseCase<void, void> {
  constructor(
    private readonly store: Store<UserState>,
    private readonly toast: ShowToastUseCase,
    private readonly router: Router
  ) {}

  public execute(): void {
    this.store.dispatch(logoutUser());

    this.toast.execute({
      messageType: messageTypeEnum.SUCCESS,
      toastData: {
        message: 'Sesión finalizada',
      },
    });

    this.router.navigate(['/auth']);
  }
}
