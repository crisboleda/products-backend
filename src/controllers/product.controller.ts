import { Request, Response } from "express";
import { Product } from "../models/Product";

export const getAllProducts = async (_req: Request, res: Response) => {
  const products = await Product.findAll();
  res.json(products);
};

export const getProductById = async (req: Request, res: Response) => {
  const product = await Product.findByPk(req.params.id);
  product ? res.json(product) : res.status(404).json({ message: "Not found" });
};

export const createProduct = async (req: Request, res: Response) => {
  try {
    const { id, ...productData } = req.body;
    const product = await Product.create(productData);
    res.status(201).json(product);
  } catch (error) {
    const err = error as Error;
    res.status(400).json({ error: err.message });
  }
};

export const updateProduct = async (req: Request, res: Response): Promise<any> => {
  const product = await Product.findByPk(req.params.id);
  if (!product) return res.status(404).json({ message: "Not found" });

  await product.update(req.body);
  res.json(product);
};

export const deleteProduct = async (req: Request, res: Response): Promise<any> => {
  try {
    const product = await Product.findByPk(req.params.id);
    if (!product) return res.status(404).json({ message: "Not found" });

    await product.destroy();
    res.json({ message: "Deleted successfully" });
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).json({ message: error.message });
    }
  }
};