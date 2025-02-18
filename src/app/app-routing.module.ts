import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrincipalPageComponent } from './shared/application/layout/principal-page/principal-page.component';

const routes: Routes = [
  {
    path: '',
    component: PrincipalPageComponent,
    children: [
      {
        path: 'auth',
        loadChildren: () =>
          import('./features/Auth/auth.module').then((m) => m.AuthModule),
      },
      {
        path: 'common',
        loadChildren: () =>
          import('./features/Common/common.module').then(
            (m) => m.CommonModuleModule,
          ),
      },
      {
        path: '',
        redirectTo: '/auth', // Redirige a la página de autenticación si no se proporciona ninguna ruta
        pathMatch: 'full',
      },

      {
        path: '**',
        redirectTo: '/common',
      },
    ],
  },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled' }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
