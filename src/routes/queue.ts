import express, { Request, Response } from "express";

import Queue from "../models/queue";
import docToJson from "../utils/docToJson";

const router = express.Router();

  router.post("/", (req: Request, res: Response) => {
    const { title } = req.body;
    if (!title)
      res
        .status(400)
        .end({ error: { message: "No title provided for queue!" } });

    const queue = new Queue({
      title,
      author: "test",
    });

    queue.save((err, result) => {
      if (err) {
        res.status(400).end(err.message);
      } else {
        res.end(docToJson(result));
      }
    });
  });

  router.get("/", (req: Request, res: Response) => {
    Queue.find().then((value) => {
      res.end(docToJson(value));
    });
  });

export default router;
