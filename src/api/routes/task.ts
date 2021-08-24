import { Router, Request, Response, NextFunction, response } from "express";
import sessionMiddleware from "../middleware/session";

const route = Router();

export default (app: Router) => {
  app.use("/task", route);

  route.use(sessionMiddleware);

  route.post("/create", (req: Request, res: Response) => {});

  route.post("/complete", (req: Request, res: Response) => {});

  route.get("/getTasks", (req: Request, res: Response) => {});

  route.delete("/delete", (req: Request, res: Response) => {});
};
