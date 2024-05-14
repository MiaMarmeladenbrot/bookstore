import express from "express";
import { doJwtAuth } from "../middlewares/doJwtAuth.js";
import { ProductsController } from "../controllers/productsController.js";

export const productsRouter = express
  .Router()
  .post("/api/v1/products", doJwtAuth, ProductsController.postAddProductCtrl);
