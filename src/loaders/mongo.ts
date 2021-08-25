import mongoose from "mongoose";
import { Db } from "mongodb";
import config from "../config";
import Logger from "./logger";

export default async (): Promise<Db> => {
  try {
    const connection = await mongoose.connect(config.mongo.URI);
    return connection.connection.db;
  } catch (error) {
    Logger.error(error);
  }
};
