import { Product } from "../../models/Product.js";

export async function showOneProduct(productId) {
  const productDetails = await Product.findById(productId);

  return productDetails;
}
