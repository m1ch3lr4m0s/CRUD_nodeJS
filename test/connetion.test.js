const db = require("../data/conn");

describe("Database Connection", () => {
  test("should connect to the database", async () => {
    await expect(db.authenticate()).resolves.not.toThrow();
  });
});