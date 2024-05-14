// prüfen, ob anfragender User Adminrechte hat
// prüfen, ob Produkt existiert
// Produkt anpassen
// neues Produkt returnen

import { Product } from "../models/Product.js";
import { User } from "../models/User.js";

export async function editProduct(
  authenticatedUserId,
  productId,
  productUpdateInfo
) {
  const user = await User.findById(authenticatedUserId);
  if (!user.isAdmin)
    throw new Error("You are not authorized to edit products.");

  const foundProduct = await Product.findById(productId);
  if (!foundProduct) throw new Error("This book does not exist.");

  const updatedProduct = await Product.findByIdAndUpdate(
    productId,
    { $set: productUpdateInfo },
    { new: true }
  );

  return updatedProduct;
}
