export interface TaskProps {
  id: string;
  title: string;
  description: string;
  type: string;
  createdAt: Date;
  updatedAt: Date;
  userEmail: string;
}
