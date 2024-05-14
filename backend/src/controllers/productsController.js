import { ProductsService } from "../services/index.js";

async function postAddProductCtrl(req, res) {
  try {
    const productInfo = req.body;
    const authenticatedUserId = req.authenticatedUserId;

    const addedProduct = await ProductsService.addProduct(
      authenticatedUserId,
      productInfo
    );
    res.json(addedProduct);
  } catch (err) {
    console.log(err);
    res
      .status(500)
      .json({ err, message: err.message || "Could not add product" });
  }
}

async function getShowAllProductsCtrl(req, res) {
  try {
    const allProducts = await ProductsService.showAllProducts();
    res.json({ allProducts });
  } catch (err) {
    console.log(err);
    res
      .status(500)
      .json({ err, message: err.message || "Could not get products" });
  }
}

export const ProductsController = {
  postAddProductCtrl,
  getShowAllProductsCtrl,
};
