import { Router } from "express";
import {
  getAllProducts,
  getProductById,
  createProduct,
  deleteProduct,
  updateProduct,
} from "../controllers/product.controller";
import { validateProduct } from "../validations/product.validation";

const router = Router();

router.get("/", getAllProducts);
router.get("/:id", getProductById);
router.post("/", validateProduct, createProduct);
router.delete("/:id", deleteProduct);
router.put("/:id", updateProduct);

export default router;
