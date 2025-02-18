import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ForbbidenComponent } from './application/pages/forbbiden/forbbiden.component';

const routes: Routes = [
  {
    path: 'forbidden',
    component: ForbbidenComponent,
  },
  { path: '', redirectTo: 'forbidden', pathMatch: 'full' },
  { path: '**', redirectTo: 'forbidden' },
];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CommonRoutingModule {}
