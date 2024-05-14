import { OrderService } from "../services/index.js";

async function postAddOrderCtrl(req, res) {
  try {
    const authenticatedUserId = req.authenticatedUserId;
    const orderInfo = {
      // date, // sollte automatisch das aktuelle Datum sein
      products: req.body.products,
      // state // sollte automatisch mit false erstellt werden
      // price // sollte automatisiert errechnet werden
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

export const OrdersController = {
  postAddOrderCtrl,
};
