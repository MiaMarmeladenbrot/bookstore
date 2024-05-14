import express from "express";
import { doJwtAuth } from "../middlewares/doJwtAuth.js";
import { OrdersController } from "../controllers/ordersController.js";

export const ordersRouter = express
  .Router()
  .post("/api/v1/orders", doJwtAuth, OrdersController.postAddOrderCtrl)
  .get("/api/v1/orders", doJwtAuth, OrdersController.getShowAllOrdersCtrl)
  .get(
    "/api/v1/orders/:userId",
    doJwtAuth,
    OrdersController.getShowUserOrdersCtrl
  )
  .patch(
    "/api/v1/orders/:orderId",
    doJwtAuth,
    OrdersController.patchEditOrderCtrl
  );
