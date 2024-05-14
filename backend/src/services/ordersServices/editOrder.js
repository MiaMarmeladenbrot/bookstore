// userId und authId müssen gleich sein ODER authId muss admin-Status haben
// andernfalls ist Anfragender nicht authorisiert, die Bestellung zu ändern
// authenticated User kommt aus req.headers, orderId aus req.params, userId aus req.body und orderUpdateInfo aus req.body

import { Order } from "../../models/Order.js";
import { User } from "../../models/User.js";

export async function editOrder(
  authenticatedUserId,
  userId,
  orderId,
  orderUpdateInfo
) {
  const user = await User.findById(userId);
  if (!user) throw new Error("User not found.");

  const authUser = await User.findById(authenticatedUserId);
  if (userId !== authenticatedUserId && !authUser.isAdmin)
    throw new Error("You are not authorized to edit this order.");

  const updatedOrder = await Order.findByIdAndUpdate(
    orderId,
    { $set: orderUpdateInfo },
    { new: true }
  );

  return updatedOrder;
}
