import {
  generateToken,
  generatePasswordHash,
  verifyToken,
  verifyPassword,
} from "../auth";
import { User, USER_ROLE } from "@prisma/client";
import { Jwt, JwtPayload } from "jsonwebtoken";
const { JWT_SECRET } = process.env;
let token: string;
let decoded: JwtPayload | string;
describe("Authentication and Authorization", () => {
  test("Should generate and verify TOKEN", () => {
    const payload: User = {
      id: 5,
      name: "YouthApi",
      phone: "+355673871445",
      password: "123456",
      credit: 0,
      role: USER_ROLE.SALES,
      createdAt: new Date(),
      qrCodeId: "415787et75",
    };

    if (JWT_SECRET) {
      token = generateToken(payload, JWT_SECRET);
      decoded = verifyToken(token, JWT_SECRET);
    }
    expect(token).toBeTruthy();
    if (typeof decoded !== "string") {
      expect(decoded.name).toBe("YouthApi");
      expect(decoded.password).toBe("123456");
      expect(decoded.qrCodeId).toBe("415787et75");
    }
  });
  test("Should generate and verify PASSWORD", async () => {
    const plainPassword = "Hello123";
    const hash = await generatePasswordHash(plainPassword);
    const result = await verifyPassword(plainPassword, hash);
    expect(hash).toBeTruthy();
    expect(result).toBe(true);
  });
});
