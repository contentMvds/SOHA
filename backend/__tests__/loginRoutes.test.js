const request = require("supertest");
const express = require("express");
const loginRoutes = require("../routes/loginRoutes");
const User = require("../models/User");

jest.mock("../models/User");

const app = express();
app.use(express.json());
app.use("/login", loginRoutes);

describe("Login Routes", () => {
  it("should return a token when valid credentials are provided", async () => {
    const mockUser = {
      _id: "6582426111727084317c5ec4",
      email: "admin@admin.com",
      password: "$2a$10$pd.Y5tNcBCxeQRMWHXtaH.3q8g/D8UaaAq4L0BYnpftTm8EohRRx2",
    };

    User.findOne.mockResolvedValue(mockUser);

    const response = await request(app).post("/login").send({
      email: "admin@admin.com",
      password: "123456789",
    });

    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty("token");
  });

  it("should return an error when invalid credentials are provided", async () => {
    User.findOne.mockResolvedValue(null); 

    const response = await request(app).post("/login").send({
      email: "invalidUser",
      password: "invalidPassword",
    });

    expect(response.status).toBe(401);
    expect(response.body.message).toBe("Credenciais inválidas");
  });
});
