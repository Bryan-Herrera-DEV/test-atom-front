export type TTaskType = "GETTING_STARTED" | "IN_PROGRESS" | "DONE";

export interface TaskProps {
  id: string;
  title: string;
  description: string;
  type: TTaskType;
  createdAt: Date;
  updatedAt: Date;
  userEmail: string;
}
