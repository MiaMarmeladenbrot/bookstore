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

async function patchEditProductCtrl(req, res) {
  try {
    const authenticatedUserId = req.authenticatedUserId;
    const productId = req.params.productId;
    const productUpdateInfo = req.body;

    const editedProduct = await ProductsService.editProduct(
      authenticatedUserId,
      productId,
      productUpdateInfo
    );
    res.json({ editedProduct });
  } catch (err) {
    console.log(err);
    res
      .status(500)
      .json({ err, message: err.message || "Could not edit this product." });
  }
}

export const ProductsController = {
  postAddProductCtrl,
  getShowAllProductsCtrl,
  patchEditProductCtrl,
};
