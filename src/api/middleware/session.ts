import express from "express";
import config from "../../config";

const tokenMiddleware = (
  req: express.Request,
  res: express.Response,
  next: express.NextFunction
) => {
  if (!req.session.isPopulated) {
    res.status(403).json({ error: "Forbidden" });
    return;
  }
  if (req.session.isAuth !== true) {
    res.status(403).json({ error: "Forbidden" });
    return;
  }
  next();
};

export default tokenMiddleware;
