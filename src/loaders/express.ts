import express from "express";
import cors from "cors";
import tokenMiddleware from "../api/middleware/token";
import routes from "../api";
import config from "../config";
import cookieSession from "cookie-session";

export default async ({ app }: { app: express.Application }) => {
  app.use(tokenMiddleware);

  app.use(express.urlencoded({ extended: true }));

  app.use(express.json());
  app.set("trust proxy", 1); // trust first proxy
  app.use(
    cookieSession({
      name: "auth-session",
      keys: [config.session.sessionSecret, config.session.keySecret],
    })
  );

  app.use(
    cors({
      origin: "*",
    })
  );

  app.use("/api", routes());

  return app;
};
