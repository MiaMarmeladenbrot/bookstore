import express from "express";
import { UsersController } from "../controllers/usersController.js";
import { doJwtAuth } from "../middlewares/doJwtAuth.js";

export const usersRouter = express
  .Router()
  .post("/register", UsersController.postCreateNewUserCtrl)
  .post("/verifyEmail", UsersController.postVerifyUserEmailCtrl)
  .post("/login", UsersController.postLoginUserCtrl)
  .patch(
    "/:userId/changeRole",
    doJwtAuth,
    UsersController.changeUserAdminRoleCtrl
  )
  .patch("/:userId", doJwtAuth, UsersController.patchEditUserCtrl)
  .post("/logout", UsersController.postLogoutUserCtrl);
