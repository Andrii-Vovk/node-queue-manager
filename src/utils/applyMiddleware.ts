import { Express } from "express";
import morgan from "morgan";
import bodyParser from "body-parser";

const applyMiddleware = (app: Express) => {
  app.use(morgan("dev"));
  app.use(bodyParser.urlencoded({ extended: false }));
  app.use(bodyParser.json());
};

export default applyMiddleware;
