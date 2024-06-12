import express from "express";
import { doJwtAuth } from "../middlewares/doJwtAuth.js";
import { ProductsController } from "../controllers/productsController.js";

export const productsRouter = express
  .Router()
  .get("/", ProductsController.getShowAllProductsCtrl)
  .get("/:bookId", ProductsController.getOneProductCtrl)
  .post("/", doJwtAuth, ProductsController.postAddProductCtrl)
  .patch("/:productId", doJwtAuth, ProductsController.patchEditProductCtrl)
  .delete("/:productId", doJwtAuth, ProductsController.deleteProductCtrl);
