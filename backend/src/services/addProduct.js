// prüfen, ob anfragender User Adminrechte hat
// prüfen, ob ISBN schon existiert
// Produkt anlegen

import { Product } from "../models/Product.js";
import { User } from "../models/User.js";

export async function addProduct(authenticatedUserId, productInfo) {
  const user = await User.findById(authenticatedUserId);
  if (!user.isAdmin) throw new Error("You are not authorized to add products.");

  const foundProduct = await Product.findOne({ isbn: productInfo.isbn });
  if (foundProduct) throw new Error("This book already exists.");

  return Product.create(productInfo);
}
