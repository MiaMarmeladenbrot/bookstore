import { Product } from "../../models/Product.js";
import { User } from "../../models/User.js";

export async function deleteProduct(authenticatedUserId, productId) {
  const authenticatedUser = await User.findById(authenticatedUserId);
  if (!authenticatedUser.isAdmin)
    throw new Error("You are not authorized to delete a book.");

  const deletedProduct = await Product.findByIdAndDelete(productId);
  if (!deletedProduct) throw new Error("Book with this id does not exist.");

  return deletedProduct;
}
