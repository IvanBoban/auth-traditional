import express from "express";
import config from "./config";
import loaders from "./loaders";
(async () => {
  const app = express();

  await loaders({ expressApp: app });

  app.listen(config.port, () => {
    console.log(`Server running on ${config.port}`);
  });
})();
