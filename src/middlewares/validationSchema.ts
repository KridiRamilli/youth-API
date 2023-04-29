import { z } from "zod";

export const registerUserSchema = z.object({
  name: z.string().min(3),
  phone: z.string().regex(/^((\+355(67|68|69)\d{7})){1}$/),
  password: z.string().min(6),
  qrCodeID: z.string(),
  role: z.enum(["CUSTOMER", "SALES", "ADMIN"]),
});

export const loginUserSchema = z.object({
  phone: z.string().regex(/^((\+355(67|68|69)\d{7})){1}$/),
  password: z.string().min(6),
});

export const productSchema = z.object({
  name: z.string(),
  sku: z.string(),
  description: z.string(),
  price: z.number(),
  categoryId: z.number(),
});

export const categorySchema = z.object({
  name: z.string().min(3),
  code: z.number(),
  description: z.string(),
});
