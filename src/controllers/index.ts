import type { Request, Response } from "express";

export const getUser = async (req: Request, res: Response) => {
  const { id } = req.params;
  console.log("got it");
  //Find user in db
  res.status(200).json({
    result: "success",
    data: {
      userId: id,
      name: "Kridi",
    },
  });
};
