import { ChangeDetectorRef, Component, signal } from '@angular/core';
import { TaskProps, TTaskType } from '../../../domain/Task';
import { TableTasksComponent } from '../../components/table-tasks/table-tasks.component';
import { TaskStatusCountingComponent } from '../../components/task-status-counting/task-status-counting.component';
import { GetTaskByUserIdUseCase } from '../../use-case/get-task-by-user-id.use-case';

@Component({
  selector: 'app-manage-tasks',
  standalone: true,
  imports: [TaskStatusCountingComponent, TableTasksComponent],
  templateUrl: './manage-tasks.component.html',
  styleUrl: './manage-tasks.component.scss',
})
export class ManageTasksComponent {
  loadingSignal = this.getTasks.loadingSignal;
  constructor(
    private readonly getTasks: GetTaskByUserIdUseCase,
    private readonly cdr: ChangeDetectorRef,
  ) {
    this.getTasks.execute().subscribe({
      next: () => {
        this.onStatusSelected('GETTING_STARTED')
      }
    })
  }

  get tasksGroupByStatus() {
    return this.getTasks.forTypeGroped;
  }

  filteredByStatus = signal<TaskProps[]>([]);

  private filterTaskByStatus(selected: TTaskType | null) {
    return selected ? this.tasksGroupByStatus[selected] || [] : [];
  }

  onStatusSelected(selected: TTaskType | null) {
    this.filteredByStatus.set(
      this.filterTaskByStatus(selected ?? 'GETTING_STARTED'),
    );
    this.cdr.detectChanges();
  }
}
