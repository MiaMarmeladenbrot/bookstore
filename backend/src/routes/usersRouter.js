import express from "express";
import { UsersController } from "../controllers/usersController.js";
import { doJwtAuth } from "../middlewares/doJwtAuth.js";

export const usersRouter = express
  .Router()
  .post("/api/v1/users/register", UsersController.postCreateNewUserCtrl)
  .post("/api/v1/users/verifyEmail", UsersController.postVerifyUserEmailCtrl)
  .post("/api/v1/users/login", UsersController.postLoginUserCtrl)
  .patch(
    "/api/v1/users/:userId/changeRole",
    doJwtAuth,
    UsersController.changeUserAdminRoleCtrl
  )
  .patch("/api/v1/users/edit", doJwtAuth, UsersController.patchEditUserCtrl);
