import type { Request } from "express";
import type { User } from "@prisma/client";

export type SafeUser = Omit<User, "createdAt" | "password">;
export type SafeRequest = Request & { user: SafeUser };
