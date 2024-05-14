import { Product } from "../models/Product.js";

export async function showAllProducts() {
  const allProducts = await Product.find({});

  return allProducts;
}
