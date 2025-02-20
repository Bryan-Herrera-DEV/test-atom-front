import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { UserEffects } from './application/stores/user.effects';
import { userReducer } from './application/stores/user.reduce';
import { UserRepository } from './infrastructure/repository/user.repository';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forFeature('users', userReducer),
    EffectsModule.forFeature([UserEffects]),
  ],
  providers: [{ provide: 'IUserRepository', useClass: UserRepository }],
})
export class UsersModule {}
