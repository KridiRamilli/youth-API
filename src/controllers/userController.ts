import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";

const prisma = new PrismaClient();

const getCurrentUser = async (req: Request, res: Response) => {
  res.status(200).json({
    user: req.user,
  });
};

const getAllUsers = async (req: Request, res: Response) => {
  const users = await prisma.user.findMany({});
  res.status(200).json({
    users,
  });
};

const getUser = async (req: Request, res: Response) => {
  const { id } = req.params;

  const user = await prisma.user.findUnique({
    where: {
      id: Number(id),
    },
  });
};
