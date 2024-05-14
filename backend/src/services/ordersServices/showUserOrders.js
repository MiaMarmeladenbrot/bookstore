// userId und authId müssen gleich sein ODER authId muss admin-Status haben
// andernfalls ist Anfragender nicht authorisiert, alle Bestellungen dieses einen Users anzuschauen

import { Order } from "../../models/Order.js";
import { User } from "../../models/User.js";

export async function showUserOrders(authenticatedUserId, userId) {
  const user = await User.findById(userId);
  if (!user) throw new Error("User not found.");

  const authUser = await User.findById(authenticatedUserId);
  if (userId !== authenticatedUserId && !authUser.isAdmin)
    throw new Error("You are not authorized to see all orders of this user.");

  const userOrders = await Order.find({ customer: userId });
  return userOrders;
}
