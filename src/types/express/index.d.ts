import { Document, Model } from "mongoose";
import Todo from "../Todo";
import User from "../User";
declare global {
  namespace Express {
    export interface Request {
      currentUser: User & Document;
    }
  }

  namespace Models {
    export type UserModel = Model<User & Document>;
    export type TodoModel = Model<Todo & Document>;
  }
}
