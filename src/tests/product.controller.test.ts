import request from "supertest";
import app from "../app";
import sequelize from "../config/database";

beforeAll(async () => {
  await sequelize.sync({ force: true });
});

afterAll(async () => {
  await sequelize.close();
});

describe("CRUD Products API", () => {
  let productId: number;

  it("Must create a product", async () => {
    const response = await request(app).post("/api/products").send({
      name: "Laptop",
      description: "This is the best Laptop in the world",
      price: 1000,
    });

    expect(response.status).toBe(201);
    expect(response.body.name).toBe("Laptop");
    expect(response.body.description).toBe("This is the best Laptop in the world");
    expect(response.body.price).toBe(1000);
    expect(response.body.id).toBeDefined()
    productId = response.body.id;
  });

  it("Must list all products", async () => {
    const response = await request(app).get("/api/products");
    expect(response.status).toBe(200);
    expect(response.body.length).toBeGreaterThan(0);
  });

  it("Must get a product by ID", async () => {
    const response = await request(app).get(`/api/products/${productId}`);
    expect(response.status).toBe(200);
    expect(response.body.name).toBe("Laptop");
    expect(response.body.description).toBe("This is the best Laptop in the world");
    expect(response.body.price).toBe(1000);
    expect(response.body.id).toBe(productId)
  });

  it("Must update a product by ID", async () => {
    const response = await request(app).put(`/api/products/${productId}`).send({
      name: "Laptop updated",
      description: "Laptop with the best description",
      price: 1200,
    });

    expect(response.status).toBe(200);
    expect(response.body.name).toBe("Laptop updated");
    expect(response.body.description).toBe("Laptop with the best description");
    expect(response.body.price).toBe(1200);
  });

  it("Must delete a product by ID", async () => {
    const response = await request(app).delete(`/api/products/${productId}`);
    expect(response.status).toBe(200);
    expect(response.body.message).toBe("Deleted successfully");
  });

  it("Must return 404 if the product does not exists", async () => {
    const response = await request(app).get(`/api/products/999`);
    expect(response.status).toBe(404);
  });
});
