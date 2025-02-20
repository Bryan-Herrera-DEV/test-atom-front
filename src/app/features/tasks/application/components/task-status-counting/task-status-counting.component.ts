import { CommonModule, NgClass } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TaskProps, TTaskType } from '../../../domain/Task';

@Component({
  selector: 'app-task-status-counting',
  standalone: true,
  imports: [CommonModule, NgClass],
  templateUrl: './task-status-counting.component.html',
  styleUrl: './task-status-counting.component.scss',
})
export class TaskStatusCountingComponent {
  @Input() tasksGroupByStatus!: Record<TTaskType, TaskProps[]>;
  @Output() statusSelected = new EventEmitter<TTaskType | null>();

  selectedStatus: TTaskType | null = 'GETTING_STARTED';
  dataForMatch = {
    GETTING_STARTED: {
      title: 'Por empezar',
      color: 'blue-300',
    },
    IN_PROGRESS: {
      title: 'En progreso',
      color: 'yellow-300',
    },
    DONE: {
      title: 'Completado',
      color: 'green-300',
    },
  };

  get mappedTasksGrouped() {
    return Object.entries(this.tasksGroupByStatus);
  }

  getData(
    [type, tasks]: [string, TaskProps[]],
    toGet: 'title' | 'color' | 'tasks',
  ) {
    if (toGet === 'tasks') return tasks;

    return this.dataForMatch[type as TTaskType]?.[toGet] ?? 'Desconocido';
  }

  toggleSelection(type: string) {
    const newType = type as TTaskType;
    this.selectedStatus = this.selectedStatus === newType ? null : newType;

    this.statusSelected.emit(this.selectedStatus);
  }

  getDynamicNgClass([type, tasks]: [string, TaskProps[]]) {
    const group = this.dataForMatch[type as TTaskType];
    return {
      [`bg-${group.color}`]: true,
      'hover:bg-opacity-40': this.selectedStatus !== type,
      '!bg-opacity-60 scale-105 shadow-lg': this.selectedStatus === type,
    };
  }
  trackByGroupType(_index: number, [type]: [string, TaskProps[]]) {
    return type;
  }
}
