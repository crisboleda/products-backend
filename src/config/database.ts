import { Sequelize } from "sequelize-typescript";
import dotenv from "dotenv";

dotenv.config({
  path: process.env.NODE_ENV === "test" ? ".env.test" : ".env",
});
const env = process.env.NODE_ENV || "development";

const sequelize = new Sequelize({
  dialect: env === "test" ? "sqlite" : "postgres",
  storage: env === "test" ? ":memory:" : undefined,
  database: process.env.DB_NAME,
  username: process.env.DB_USER,
  password: process.env.DB_PASS,
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT) || 5432,
  logging: env === "test" ? false : console.log,
  models: [__dirname + "/../models"],
});

export default sequelize;
