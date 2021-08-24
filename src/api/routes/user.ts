import { Router, Request, Response, NextFunction, response } from "express";
import sessionMiddleware from "../middleware/session";

const route = Router();

export default (app: Router) => {
  app.use("/user", route);

  route.use(sessionMiddleware);

  route.patch("/updateInfo", (req: Request, res: Response) => {});
};
