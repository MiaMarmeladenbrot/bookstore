import { OrderService } from "../services/index.js";

async function postAddOrderCtrl(req, res) {
  try {
    const authenticatedUserId = req.authenticatedUserId;
    const orderInfo = {
      // date, // sollte automatisch mit default aktuelles Datum erstellt werden
      products: req.body.products,
      // state // sollte automatisch mit default false erstellt werden
      // price // wird im Service berechnet
      customer: req.authenticatedUserId,
    };

    const addedOrder = await OrderService.addOrder(
      authenticatedUserId,
      orderInfo
    );
    res.json({ addedOrder });
  } catch (err) {
    console.log(err);
    res
      .status(500)
      .json({ err, message: err.message || "Could not add order." });
  }
}

async function getShowAllOrdersCtrl(req, res) {
  try {
    const authenticatedUserId = req.authenticatedUserId;
    const allOrders = await OrderService.showAllOrders(authenticatedUserId);
    res.json({ allOrders });
  } catch (err) {
    console.log(err);
    res
      .status(500)
      .json({ err, message: err.message || "Could not get all orders." });
  }
}

export const OrdersController = {
  postAddOrderCtrl,
  getShowAllOrdersCtrl,
};
