import { addProduct } from "./addProduct.js";
import { changeUserAdminRole } from "./changeUserAdminRole.js";
import { editUser } from "./editUser.js";
import { loginUser } from "./loginUser.js";
import { registerUser } from "./registerUser.js";
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
};
