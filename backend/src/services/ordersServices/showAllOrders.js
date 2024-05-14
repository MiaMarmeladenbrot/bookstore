import { Order } from "../../models/Order.js";
import { User } from "../../models/User.js";

export async function showAllOrders(authenticatedUserId) {
  const adminUser = await User.findById(authenticatedUserId);
  if (!adminUser.isAdmin)
    throw new Error("You are not authorized to see all orders.");

  const allOrders = await Order.find({});
  return allOrders;
}
