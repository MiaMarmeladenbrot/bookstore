import { ProductsService } from "../services/index.js";

async function postAddProductCtrl(req, res) {
  try {
    const productInfo = req.body;
    const authenticatedUserId = req.authenticatedUserId;

    const result = await ProductsService.addProduct(
      authenticatedUserId,
      productInfo
    );
    res.json({ result });
  } catch (err) {
    console.log(err);
    res
      .status(500)
      .json({ err, message: err.message || "Could not add product" });
  }
}

async function getShowAllProductsCtrl(req, res) {
  try {
    const result = await ProductsService.showAllProducts();
    res.json({ result });
  } catch (err) {
    console.log(err);
    res
      .status(500)
      .json({ err, message: err.message || "Could not get products" });
  }
}

async function getOneProductCtrl(req, res) {
  try {
    const productId = req.params.bookId;
    const result = await ProductsService.showOneProduct(productId);
    res.json({ result });
  } catch (err) {
    console.log(err);
    res
      .status(500)
      .json({ err, message: err.message || "Could not get this product" });
  }
}

async function patchEditProductCtrl(req, res) {
  try {
    const authenticatedUserId = req.authenticatedUserId;
    const productId = req.params.productId;
    const productUpdateInfo = req.body;

    const result = await ProductsService.editProduct(
      authenticatedUserId,
      productId,
      productUpdateInfo
    );
    res.json({ result });
  } catch (err) {
    console.log(err);
    res
      .status(500)
      .json({ err, message: err.message || "Could not edit this product." });
  }
}

async function deleteProductCtrl(req, res) {
  try {
    const authenticatedUserId = req.authenticatedUserId;
    const productId = req.params.productId;
    const result = await ProductsService.deleteProduct(
      authenticatedUserId,
      productId
    );
    res.json({ result });
  } catch (err) {
    console.log(err);
    res
      .status(500)
      .json({ err, message: err.message || "Could not delete this product." });
  }
}

export const ProductsController = {
  postAddProductCtrl,
  getShowAllProductsCtrl,
  getOneProductCtrl,
  patchEditProductCtrl,
  deleteProductCtrl,
};
