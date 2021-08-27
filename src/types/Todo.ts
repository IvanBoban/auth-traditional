export default interface Todo {
  _id: string;
  userId: string;
  name: string;
  status: TodoStatus;
  createdAt: Date;
  updatedAt: Date;
}

export default interface TodoDTO {
  userId: string;
  name: string;
  status: TodoStatus;
}

export enum TodoStatus {
  INCOMPLETE = "INCOMPLETE",
  STARTED = "STARTED",
  COMPLETED = "COMPLETED",
  CANCELED = "CANCELED",
}
