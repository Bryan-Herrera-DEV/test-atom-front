import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { GetUserUseCase } from '../../../Users/application/use-case/get-user.use-case';

@Injectable({
  providedIn: 'root',
})
export class NoAuthGuard implements CanActivate {
  constructor(
    private readonly getUserUseCase: GetUserUseCase,
    private readonly router: Router
  ) {}

  canActivate(): boolean {
    const user = this.getUserUseCase.userSignal;

    if (user) {
      this.router.navigate(['/dashboard']);
      return false;
    }
    return true;
  }
}
