import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ManageTasksComponent } from './application/pages/manage-tasks/manage-tasks.component';

const routes: Routes = [
  {
    path: 'tasks',
    component: ManageTasksComponent,
  },
  { path: '', redirectTo: 'tasks', pathMatch: 'full' },
  { path: '**', redirectTo: 'tasks' },
];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TasksRoutingModule {}
