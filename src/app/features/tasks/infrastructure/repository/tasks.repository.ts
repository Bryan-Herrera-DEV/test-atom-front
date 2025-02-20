import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../../../environments/environment.dev';
import { TaskProps } from '../../domain/Task';
import { ITaskRepository } from '../../domain/tasks.repository';

@Injectable({
  providedIn: 'root',
})
export class TaskRepository implements ITaskRepository {
  private readonly apiUrl = `${environment.API_URL}/tasks`;

  constructor(private readonly http: HttpClient) {}

  getTask(email: string): Observable<TaskProps[]> {
    return this.http.get<TaskProps[]>(`${this.apiUrl}?userEmail=${email}`);
  }

  createTask(task: TaskProps): Observable<TaskProps> {
    return this.http.post<TaskProps>(`${this.apiUrl}`, task);
  }

}
