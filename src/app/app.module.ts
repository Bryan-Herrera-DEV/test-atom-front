import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { CommonModule } from '@angular/common';
import { provideHttpClient } from '@angular/common/http';
import { provideAnimations } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { EffectsModule } from '@ngrx/effects';
import { MetaReducer, StoreModule } from '@ngrx/store';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthModule } from './features/Auth/auth.module';
import { CommonRoutingModule } from './features/Common/common-routing.module';
import { UserEffects } from './features/Users/application/stores/user.effects';
import { UsersModule } from './features/Users/user.module';
import { reducers } from './shared/application/store/AppState';
import { hydrationMetaReducer } from './shared/application/store/hydratation.reducer';
import { ToastEffects } from './shared/application/toast/store/toast.effects';
import { NgRxUtilities } from './shared/domain/utils/NgRxUtilities.service';

export const metaReducers: MetaReducer[] = [hydrationMetaReducer];

@NgModule({
  declarations: [AppComponent],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    AuthModule,
    UsersModule,
    CommonRoutingModule,
    StoreModule.forRoot(
      reducers,
      {
        metaReducers,
        runtimeChecks: {
          strictStateImmutability: true,
          strictActionImmutability: true,
        },
      },
    ),
    EffectsModule.forRoot([UserEffects, ToastEffects]),
  ],
  providers: [
    RouterModule,
    provideHttpClient(),
    provideAnimations(),
    NgRxUtilities,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
