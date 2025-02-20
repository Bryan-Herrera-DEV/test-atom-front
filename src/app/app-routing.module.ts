import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoggedGuard } from './features/Auth/infrastructure/guards/logged.guard';
import { NoAuthGuard } from './features/Auth/infrastructure/guards/no-auth.guard';
import { PrincipalPageComponent } from './shared/application/layout/principal-page/principal-page.component';

const routes: Routes = [
  {
    path: '',
    component: PrincipalPageComponent,
    children: [
      {
        path: 'auth',
        canActivate: [NoAuthGuard],
        loadChildren: () =>
          import('./features/Auth/auth.module').then((m) => m.AuthModule),
      },
      {
        path: 'dashboard',
        canActivate: [LoggedGuard],
        children: [
          {
            path: '',
            loadChildren: () =>
              import('./features/tasks/tasks.module').then(
                (m) => m.TasksModule,
              ),
          },
        ],
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
        redirectTo: '/auth',
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
