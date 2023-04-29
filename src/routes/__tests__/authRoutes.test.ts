import request from "supertest";

import app from "../../app";
import { customerUser, adminUser, errorUser } from "../../mock";
import { generatePasswordHash, generateToken } from "../../utils/auth";

const { JWT_SECRET, BASE_URL = "/api/v1" } = process.env;

let customerToken: string;
let adminToken: string;

beforeAll(() => {
  if (JWT_SECRET) {
    customerToken = generateToken(customerUser, JWT_SECRET);
    adminToken = generateToken(adminUser, JWT_SECRET);
  }
});

describe("AUTH - user", () => {
  test("GET - /", async () => {
    const res = await request(app).get(`${BASE_URL}/`).expect(401);
    expect(res.body.result).toBe("error");
  });
});

// */login - POST, Login user
// */logout - POST, Logout user
