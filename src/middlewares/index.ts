import { Request, Response, NextFunction } from "express";

export const auth = async (req: Request, res: Response, next: NextFunction) => {
  const { id } = req.params;

  //Ask db if user exists
  //See if pass match
  console.log(id);
  if (id === "100") {
    next();
  } else {
    return;
  }
};
