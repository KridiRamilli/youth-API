import winston from "winston";
import path from "path";
import { describe, it } from "@jest/globals";
import fs from "fs";

import { logger } from "../logger";
import { wait } from "../utils";

let logFileName = path.join(__dirname, "..", "..", "logs/test2.log");
let testTransport: winston.transport;
beforeAll(() => {
  testTransport = new winston.transports.File({
    filename: logFileName,
    level: "debug",
  });
  logger.add(testTransport);
});

afterAll(() => {
  fs.unlinkSync(logFileName);
  logger.remove(testTransport);
});

describe("Test logger and file streaming logs", () => {
  it("Should be true", async () => {
    logger.debug("This is a test log");
    await wait(500);
    expect(fs.existsSync(logFileName)).toBe(true);
    let content = fs.readFileSync(logFileName, "utf-8");
    expect(content).toContain("This is a test log");
  });
});
