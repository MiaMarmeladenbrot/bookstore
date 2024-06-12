import { OrderService } from "../services/index.js";

async function postAddOrderCtrl(req, res) {
  try {
    const authenticatedUserId = req.authenticatedUser._id;
    const orderInfo = {
      // date, // sollte automatisch mit default aktuelles Datum erstellt werden
      products: req.body.products,
      // state // sollte automatisch mit default false erstellt werden
      // price // wird im Service berechnet
      customer: authenticatedUserId,
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
    const authenticatedUserId = req.authenticatedUser._id;
    const allOrders = await OrderService.showAllOrders(authenticatedUserId);
    res.json({ allOrders });
  } catch (err) {
    console.log(err);
    res
      .status(500)
      .json({ err, message: err.message || "Could not get all orders." });
  }
}

async function getShowUserOrdersCtrl(req, res) {
  try {
    const authenticatedUserId = req.authenticatedUser._id;
    const userId = req.params.userId;
    const userOrders = await OrderService.showUserOrders(
      authenticatedUserId,
      userId
    );
    res.json({ userOrders });
  } catch (err) {
    console.log(err);
    res
      .status(500)
      .json({ err, messsage: err.message || "Could not find user's orders." });
  }
}

async function patchEditOrderCtrl(req, res) {
  try {
    const authenticatedUserId = req.authenticatedUser._id;
    const userId = req.body.customer;
    const orderId = req.params.orderId;
    const orderUpdateInfo = req.body;

    const editedOrder = await OrderService.editOrder(
      authenticatedUserId,
      userId,
      orderId,
      orderUpdateInfo
    );
    res.json({ editedOrder });
  } catch (err) {
    console.log(err);
    res
      .status(500)
      .json({ err, message: err.message || "Could not edit this order." });
  }
}

export const OrdersController = {
  postAddOrderCtrl,
  getShowAllOrdersCtrl,
  getShowUserOrdersCtrl,
  patchEditOrderCtrl,
};
