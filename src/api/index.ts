import { Router } from "express";
import auth from "./routes/auth";
import task from "./routes/task";
import user from "./routes/user";

export default () => {
  const app = Router();
  auth(app);
  task(app);
  user(app);

  return app;
};
