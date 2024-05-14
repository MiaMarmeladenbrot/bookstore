import { addOrder } from "./addOrder.js";
import { addProduct } from "./addProduct.js";
import { changeUserAdminRole } from "./changeUserAdminRole.js";
import { deleteProduct } from "./deleteProduct.js";
import { editOrder } from "./editOrder.js";
import { editProduct } from "./editProduct.js";
import { editUser } from "./editUser.js";
import { loginUser } from "./loginUser.js";
import { registerUser } from "./registerUser.js";
import { showAllOrders } from "./showAllOrders.js";
import { showAllProducts } from "./showAllProducts.js";
import { showUserOrders } from "./showUserOrders.js";
import { verifyUserEmail } from "./verifyUserEmail.js";

export const UsersService = {
  registerUser,
  verifyUserEmail,
  loginUser,
  changeUserAdminRole,
  editUser,
};

export const ProductsService = {
  addProduct,
  showAllProducts,
  editProduct,
  deleteProduct,
};

export const OrderService = {
  addOrder,
  showAllOrders,
  showUserOrders,
  editOrder,
};
