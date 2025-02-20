import { Component } from '@angular/core';
import { GetTaskByUserIdUseCase } from '../../use-case/get-task-by-user-id.use-case';

@Component({
  selector: 'app-manage-tasks',
  standalone: true,
  imports: [],
  templateUrl: './manage-tasks.component.html',
  styleUrl: './manage-tasks.component.scss',
})
export class ManageTasksComponent {
  constructor(private readonly getTasks: GetTaskByUserIdUseCase) {
    this.getTasks.execute().subscribe({
      next: (data) => console.log(data),
      error: (error) => console.error(error),
    });
  }
}
