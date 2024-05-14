// user authenticaten ✅
// user prüfen ✅
// Variable mit Order-Daten erstellen (date und state sind default aus Model, price ist Summe der products.prices) ✅
// order createn ✅

import { Order } from "../../models/Order.js";
import { Product } from "../../models/Product.js";
import { User } from "../../models/User.js";

export async function addOrder(authenticatedUserId, orderInfo) {
  const user = await User.findById(authenticatedUserId);
  if (!user) throw new Error("User does not exist.");

  const foundProducts = await Product.find({
    _id: { $in: orderInfo.products },
  });

  const sumPriceOfAllProducts = foundProducts.reduce(
    (acc, obj) => acc + obj.price,
    0
  );
  //   console.log("sumPriceOfAllProducts:", sumPriceOfAllProducts);

  const orderInfoWithPrice = {
    ...orderInfo,
    price: sumPriceOfAllProducts,
  };

  const addedOrder = Order.create(orderInfoWithPrice);
  return addedOrder;
}
