import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";

const prisma = new PrismaClient();

const getMe = async (req: Request, res: Response) => {
  res.status(200).json({
    user: req.user,
  });
};

const getAllUser = async (req: Request, res: Response) => {
  const users = await prisma.user.findMany({});
  res.status(200).json({
    users,
  });
};
