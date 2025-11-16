const request = require("supertest");
const app = require("../../src/app");
const { MongoMemoryServer } = require("mongodb-memory-server");
const mongoose = require("mongoose");

let mongoServer;
beforeAll(async () => {
  mongoServer = await MongoMemoryServer.create();
  await mongoose.connect(mongoServer.getUri());
});
afterAll(async () => {
  await mongoose.disconnect();
  await mongoServer.stop();
});

test("POST /api/bugs creates a bug", async () => {
  const res = await request(app)
    .post("/api/bugs")
    .send({ title: "Test", description: "Desc" });
  expect(res.statusCode).toBe(201);
  expect(res.body.title).toBe("Test");
});
