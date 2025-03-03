import express from "express";
import cors from "cors";
import { swaggerDocs } from "./docs/swagger";
import sequelize from "./config/database";
import productRoutes from "./routes/product.routes";

const app = express();

app.use(cors());
app.use(express.json());
app.use("/api/products", productRoutes);
swaggerDocs(app, 3000);

sequelize.sync({ force: false }).then(() => {
  console.log("Database connected");
});

export default app;
