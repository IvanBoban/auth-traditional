import { Router, Request, Response, NextFunction, response } from "express";

const route = Router();

export default (app: Router) => {
  app.use("/user", route);

  route.patch("/updateInfo", (req: Request, res: Response) => {});
};
