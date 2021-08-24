import { Router, Request, Response } from "express";

const route = Router();

export default (app: Router) => {
  app.use("/auth", route);

  route.post("/signIn", (req: Request, res: Response) => {
    req.session.isAuth = true;
    res.status(200).send({ isAuth: true });
  });

  route.post("/signUp", (req: Request, res: Response) => {
    res.send("hi");
  });

  route.post("/signOut", (req: Request, res: Response) => {
    req.session.isAuth = true;
    res.status(200).send({ isAuth: false });
  });

  route.get("/checkSession", (req: Request, res: Response) => {});

  route.delete("/deleteAccount", (req: Request, res: Response) => {});
};
