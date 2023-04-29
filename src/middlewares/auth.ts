import type { NextFunction, Request, Response } from "express";
import { logger } from "../utils/logger";
import { registerUserSchema } from "./validationSchema";
const authenticate = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  // logger.info(req.header);
  next();
};

export { authenticate };
