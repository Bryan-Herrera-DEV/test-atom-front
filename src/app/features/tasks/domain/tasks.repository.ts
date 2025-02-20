import { Observable } from "rxjs";
import { TaskProps } from "./Task";

export interface ITaskRepository {
  getTask(email: string): Observable<TaskProps[]>;
  createTask(task: TaskProps): Observable<TaskProps>;
  // updateTask(taskId: string, task: TaskProps): Observable<TaskProps>;
  // deleteTask(taskId: string, userEmail: string): Observable<void>;
}
