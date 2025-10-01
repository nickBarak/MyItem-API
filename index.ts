import { Request, Response } from "express";

const { APP_NAME, HOST, PORT, DB, API, UI, DB_USER, DB_SECRET } =
  require("dotenv").config();

const express = require("express"),
  app = express(),
  cors = require("cors");

app.use(cors());

app.get("/", (req: Request, res: Response) =>
  res.status(200).send(`Welcome to ${APP_NAME}`)
);
app.post("/", (req: Request, res: Response) => res.status(201).send(req.body));

app.listen(PORT || 4433, () =>
  console.log(`${APP_NAME} is running at ${HOST} on port ${PORT || 4433}...`)
);
