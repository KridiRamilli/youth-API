import type { Request, Response } from "express";

export const getUser = async (req: Request, res: Response) => {
  const { id } = req.params;
  console.log(req.user);
  //Find user in db
  res.json({
    userId: id,
    name: "Kridi",
  });
};
