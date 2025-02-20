import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { TaskEffects } from './application/stores/tasks.effects';
import { tasksReducer } from './application/stores/tasks.reducers';
import { TaskRepository } from './infrastructure/repository/tasks.repository';
import { TasksRoutingModule } from './tasks-routing.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    TasksRoutingModule,
    StoreModule.forFeature('tasks', tasksReducer),
    EffectsModule.forFeature([TaskEffects]),
  ],
  providers: [
    {
      provide: 'ITaskRepository',
      useClass: TaskRepository,
    },
  ],
})
export class TasksModule {}
