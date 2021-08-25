import "reflect-metadata";
import express from "express";
import config from "./config";
import loaders from "./loaders";
import Logger from "./loaders/logger";
(async () => {
  const app = express();

  await loaders({ expressApp: app });

  app
    .listen(config.port, () => {
      Logger.info(`
      ################################################
      🛡️  Server listening on port: ${config.port} 🛡️
      ################################################
    `);
    })
    .on("error", (err) => {
      Logger.error(err);
      process.exit(1);
    });
})();
