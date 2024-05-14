import { loginUser } from "./loginUser.js";
import { registerUser } from "./registerUser.js";
import { verifyUserEmail } from "./verifyUserEmail.js";

export const UsersService = {
  registerUser,
  verifyUserEmail,
  loginUser,
};
