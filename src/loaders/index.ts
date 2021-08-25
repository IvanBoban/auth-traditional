import expressLoader from "./express";
import express from "express";
import mongo from "./mongo";

export default async ({ expressApp }: { expressApp: express.Application }) => {
  await mongo();
  expressLoader({ app: expressApp });
};
