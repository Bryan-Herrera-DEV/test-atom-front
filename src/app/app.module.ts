import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { CommonModule } from '@angular/common';
import { provideHttpClient } from '@angular/common/http';
import { provideAnimations } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ToastEffects } from './shared/application/toast/store/toast.effects';
import { NgRxUtilities } from './shared/domain/utils/NgRxUtilities.service';

@NgModule({
  declarations: [AppComponent],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot(
      {},
      {
        runtimeChecks: {
          strictStateImmutability: true,
          strictActionImmutability: true,
        },
      },
    ),
    EffectsModule.forRoot([ToastEffects]),
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
