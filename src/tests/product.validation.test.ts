import request from "supertest";
import sequelize from "../config/database";
import app from "../app";

beforeAll(async () => {
    await sequelize.sync({ force: true });
});
  
afterAll(async () => {
    await sequelize.close();
});

describe("Product Validation Middleware", () => {
  it("Should return 400 if name is missing", async () => {
    const response = await request(app)
      .post("/api/products")
      .send({ description: "Product description", price: 100 });
    
    expect(response.status).toBe(400);
    expect(response.body.errors[0].msg).toBe("El nombre es obligatorio.");
  });

  it("Should return 400 if description is missing", async () => {
    const response = await request(app)
      .post("/api/products")
      .send({ name: "Product name", price: 100 });
    
    expect(response.status).toBe(400);
    expect(response.body.errors[0].msg).toBe("La descripción es obligatoria.");
  });

  it("Should return 400 if price is not greater than 0", async () => {
    const response = await request(app)
      .post("/api/products")
      .send({ name: "Product", description: "Product description", price: -5 });
    
    expect(response.status).toBe(400);
    expect(response.body.errors[0].msg).toBe("El precio debe ser mayor a 0.");
  });

  it("Should return 200 if all fields are correct", async () => {
    const response = await request(app)
      .post("/api/products")
      .send({ name: "Product", description: "Product description", price: 100 });

    expect(response.status).toBe(201);
  });
});
