import expressLoader from "./express";
import express from "express";
import mongo from "./mongo";
import Logger from "./logger";

export default async ({ expressApp }: { expressApp: express.Application }) => {
  await mongo();

  Logger.info("Connected to database ");

  expressLoader({ app: expressApp });

  Logger.info("Mounted express");
};
