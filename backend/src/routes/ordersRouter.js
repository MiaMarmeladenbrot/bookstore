import express from "express";
import { doJwtAuth } from "../middlewares/doJwtAuth.js";
import { OrdersController } from "../controllers/ordersController.js";

export const ordersRouter = express
  .Router()
  .post("/", doJwtAuth, OrdersController.postAddOrderCtrl)
  .get(
    "/",
    doJwtAuth({ onlyAdmins: true }),
    OrdersController.getShowAllOrdersCtrl
  )
  .get("/:userId", doJwtAuth(), OrdersController.getShowUserOrdersCtrl)
  .patch("/:orderId", doJwtAuth(), OrdersController.patchEditOrderCtrl);
