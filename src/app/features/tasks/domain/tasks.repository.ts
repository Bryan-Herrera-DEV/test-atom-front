import { Observable } from "rxjs";
import { TaskProps } from "./Task";

export interface ITaskRepository {
  getTask(email: string): Observable<TaskProps[]>;
}
