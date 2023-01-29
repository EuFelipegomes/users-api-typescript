import express from "express";
import { config } from "dotenv";
import { MongoClient } from "./database/mongo";
import { router } from "./routes/routes";

const main = async () => {
  config();

  const port = process.env.PORT || 8000;

  await MongoClient.connect();

  const app = express();

  app.use(express.json());
  app.use(router);

  app.listen(port, () => console.log(`listening on port: ${port}`));
};

main();
