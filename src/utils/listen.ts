import { Express } from "express";
import mongoose from "mongoose";

const listen = async (
  app: Express,
  databaseUrl: string | undefined,
  port: number | undefined
) => {
  if (!databaseUrl) throw new Error("No database url provided!");
  if (!port) throw new Error("No port provided!");

  mongoose.connect(databaseUrl).then(() =>
    app.listen(port, () => {
      console.log(
        `⚡️[server]: Server is running at https://localhost:${port}`
      );
    })
  );
};

export default listen;
