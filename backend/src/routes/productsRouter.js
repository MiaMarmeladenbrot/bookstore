import express from "express";
import { doJwtAuth } from "../middlewares/doJwtAuth.js";
import { ProductsController } from "../controllers/productsController.js";

export const productsRouter = express
  .Router()
  .get("/api/v1/products", ProductsController.getShowAllProductsCtrl)
  .get("/api/v1/products/:bookId", ProductsController.getOneProductCtrl)
  .post("/api/v1/products", doJwtAuth, ProductsController.postAddProductCtrl)
  .patch(
    "/api/v1/products/:productId",
    doJwtAuth,
    ProductsController.patchEditProductCtrl
  )
  .delete(
    "/api/v1/products/:productId",
    doJwtAuth,
    ProductsController.deleteProductCtrl
  );
