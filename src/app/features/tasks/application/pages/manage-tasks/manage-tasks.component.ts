import { Component } from '@angular/core';
import { TaskStatusCountingComponent } from '../../components/task-status-counting/task-status-counting.component';
import { GetTaskByUserIdUseCase } from '../../use-case/get-task-by-user-id.use-case';

@Component({
  selector: 'app-manage-tasks',
  standalone: true,
  imports: [TaskStatusCountingComponent],
  templateUrl: './manage-tasks.component.html',
  styleUrl: './manage-tasks.component.scss',
})
export class ManageTasksComponent {
  constructor(private readonly getTasks: GetTaskByUserIdUseCase) {
    this.getTasks.execute().subscribe();
  }

  get tasksGroupByStatus() {
    return this.getTasks.forTypeGroped;
  }
}
