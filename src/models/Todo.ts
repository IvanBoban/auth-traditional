import mongoose from "mongoose";
import { TodoStatus } from "../types/Todo";

const TodoModel = new mongoose.Schema({
  userId: {
    type: String,
  },
  name: String,
  status: {
    type: TodoStatus,
    default: TodoStatus.INCOMPLETE,
  },
});

export default mongoose.model<mongoose.Document>("Todos", TodoModel);
