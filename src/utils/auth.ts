import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import type { SafeUser } from "../types";

const generateToken = (user: SafeUser, privateKey: string) => {
  const token = jwt.sign(user, privateKey);
  return token;
};

const verifyToken = (token: string, privateKey: string) => {
  return jwt.verify(token, privateKey);
};

const generatePasswordHash = async (password: string) => {
  const saltRounds = 10;
  const salt = await bcrypt.genSalt(saltRounds);
  const hash = await bcrypt.hash(password, salt);
  return hash;
};

const verifyPassword = async (password: string, hash: string) => {
  const result = await bcrypt.compare(password, hash);
  return result;
};

export { generateToken, generatePasswordHash, verifyToken, verifyPassword };
