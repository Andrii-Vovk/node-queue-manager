import express, { Express } from "express";
import dotenv from "dotenv";

import listen from "./utils/listen";
import serverCheck from "./utils/serverRestartCheck";
import applyMiddleware from "./utils/applyMiddleware";
import queueRoutes from "./routes/queue";

dotenv.config();

serverCheck(process);

const app: Express = express();
const port = process.env.PORT ? parseInt(process.env.PORT) : undefined;
const databaseUrl = process.env.DATABASE;

applyMiddleware(app);

app.use("/queues", queueRoutes);

listen(app, databaseUrl, port);
