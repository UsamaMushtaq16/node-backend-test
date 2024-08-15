import request from "supertest";
import app from "./app.js";

describe("Testing Application Endpoints", () => {
  afterAll((done) => {
    app.close(done);
  });

  it("GET /api/v1/countries - Fetching Countries Data", async () => {
    const res = await request(app).get("/api/v1/countries");
    expect(res.statusCode).toEqual(200);
  });

  it("GET /api/v1/holidays?country=PK&year=2024 - Fetching Holidays Data", async () => {
    const res = await request(app).get("/api/v1/countries");
    expect(res.statusCode).toEqual(200);
  });
});
