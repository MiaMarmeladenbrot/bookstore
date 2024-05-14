import express from "express";
import { UsersController } from "../controllers/usersController.js";

export const usersRouter = express
  .Router()
  .post("/api/v1/admins/register", UsersController.postCreateNewUserCtrl);
