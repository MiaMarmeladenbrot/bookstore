import { registerUser } from "./usersServices/registerUser.js";
import { verifyUserEmail } from "./usersServices/verifyUserEmail.js";
import { loginUser } from "./usersServices/loginUser.js";
import { changeUserAdminRole } from "./usersServices/changeUserAdminRole.js";
import { editUser } from "./usersServices/editUser.js";

import { addProduct } from "./productsServices/addProduct.js";
import { deleteProduct } from "./productsServices/deleteProduct.js";
import { editProduct } from "./productsServices/editProduct.js";
import { showAllProducts } from "./productsServices/showAllProducts.js";

import { addOrder } from "./ordersServices/addOrder.js";
import { showAllOrders } from "./ordersServices/showAllOrders.js";
import { showUserOrders } from "./ordersServices/showUserOrders.js";
import { editOrder } from "./ordersServices/editOrder.js";

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
