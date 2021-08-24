import { Router, Request, Response } from "express";

const route = Router();

export default (app: Router) => {
  app.use("/auth", route);

  route.post("/signIn", (req: Request, res: Response) => {});

  route.post("/signUp", (req: Request, res: Response) => {});

  route.post("/signOut", (req: Request, res: Response) => {});

  route.get("/checkSession", (req: Request, res: Response) => {});

  route.delete("/deleteAccount", (req: Request, res: Response) => {});
};
