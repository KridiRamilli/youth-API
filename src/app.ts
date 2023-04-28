import * as dotenv from "dotenv";
dotenv.config();

import fs from "fs";
import path from "path";

import express, { Express, Request, Response } from "express";

//imports third party
import helmet from "helmet";
//@ts-ignore
import xss from "xss-clean";
import rateLimit from "express-rate-limit";
import morgan from "morgan";
import winston from "winston";
import { logger } from "./utils/logger";

import userRouter from "./routes/userRoutes";
import { auth } from "./middlewares";

const app: Express = express();

//Constants
const PORT = process.env.PORT || 3000;
const httpLogStream = fs.createWriteStream(
  path.join(__dirname, "..", "logs/httpReqRes.log"),
  {
    flags: "a",
  }
);
const { BASE_URL } = process.env;

//middlewares
app.use(express.json());
app.use(helmet());
app.use(xss());
app.use(
  rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 200, // Limit each IP to 200 requests per `window` (here, per 15 minutes)
    standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers
    legacyHeaders: false, // Disable the `X-RateLimit-*` headers
  })
);
app.use(morgan("combined", { stream: httpLogStream }));

//Routes
app.use(`${BASE_URL}/user`, userRouter);

const start = async () => {
  try {
    app.listen(PORT, () => {
      logger.info(`Server is listening on port ${PORT}`);
    });
  } catch (error) {
    if (error instanceof Error) {
      logger.error(error.message);
    }
  }
};

process.on("uncaughtException", (err) => {
  logger.error(err);
  process.exit(1);
});

if (process.env.NODE_ENV !== "test") {
  start();
}

export default app;
