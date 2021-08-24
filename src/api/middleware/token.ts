import express from "express";
import config from "../../config";

const tokenMiddleware = (
  req: express.Request,
  res: express.Response,
  next: express.NextFunction
) => {
  if (req.headers.authorization !== config.auth.token) {
    res.status(401).json({ error: "Invalid token" });
    return;
  }
  next();
};

export default tokenMiddleware;
