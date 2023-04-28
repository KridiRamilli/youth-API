import request from "supertest";

import app from "../../app";
import { customerUser, adminUser, errorUser } from "../../mock";

const { JWT_SECRET, BASE_URL = "/api/v1" } = process.env;

describe("ROUTES /user", () => {
  test("GET /:id - get specific user", async () => {
    const res = await request(app).get(`${BASE_URL}/user/35`).expect(200);
    expect(res.body.result).toBe("success");
    expect(res.body.data.userId).toBe("35");
  });

  test("GET /me - get current user", async () => {
    const res = await request(app).get(`${BASE_URL}/user/me`).expect(200);
    expect(res.body.result).toBe("success");
    expect(res.body.data.name).toBeTruthy();
    expect(res.body.data.qrcodeId).toBeTruthy();
  });

  test("GET / - get all users", async () => {
    const res = await request(app).get(`${BASE_URL}/user/all`).expect(200);
    expect(res.body.result).toBe("success");
    expect(Array.isArray(res.body.data)).toBe(true);
  });

  test("POST / - register new user", async () => {
    const res = request(app)
      .post(`${BASE_URL}/user`)
      .set("Accept", "application/json")
      .expect("Content-Type", /json/);
    const customerRes = await res.send(customerUser).expect(201);
    const errorRes = await res.send(errorUser).expect(401);
    expect(customerRes.body.result).toBe("success");
    expect(customerRes.body.data.token).toBeTruthy();
    expect(errorRes.body.result).toBe("error");
    expect(errorRes.body.data.token).toBeFalsy();
  });
});

//ROUTES

// */all - GET, get all users
// */:id - GET, get specific user
// */me - GET, Get user
// */register - POST, register user
