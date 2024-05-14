import { UsersService } from "../services/index.js";

async function postCreateNewUserCtrl(req, res) {
  try {
    const newUser = req.body;
    const addedUser = await UsersService.registerUser(newUser);
    res.json(addedUser);
  } catch (err) {
    console.log(err);
    res
      .status(500)
      .json({ err, message: err.message || "Could not register user" });
  }
}

async function postVerifyUserEmailCtrl(req, res) {
  try {
    const verifyEmailInfo = {
      userId: req.body.userId,
      sixDigitCode: req.body.sixDigitCode,
    };
    const verifiedEmail = await UsersService.verifyUserEmail(verifyEmailInfo);
    res.json({ verifiedEmail });
  } catch (err) {
    console.log(err);
    res.json({ err, message: err.message || "Could not verify email" });
  }
}

async function postLoginUserCtrl(req, res) {
  try {
    const loginInfo = {
      email: req.body.email,
      password: req.body.password,
    };

    const loggedUser = await UsersService.loginUser(loginInfo);
    res.json({ loggedUser });
  } catch (err) {
    console.log(err);
    res.json({ err, message: err.message || "Could not login user" });
  }
}

async function changeUserAdminRoleCtrl(req, res) {
  try {
    const updateInfo = {
      adminUserId: req.authenticatedUserId,
      userId: req.params.userId,
      isAdmin: req.body.isAdmin,
    };
    const changedUser = await UsersService.changeUserAdminRole(updateInfo);
    res.json({ changedUser });
  } catch (err) {
    console.log(err);
    res.json({
      err,
      message: err.message || "Could not change this user's role.",
    });
  }
}

async function patchEditUserCtrl(req, res) {
  try {
    const userUpdateInfo = req.body;
    const userId = req.authenticatedUserId;

    const editedUser = await UsersService.editUser(userId, userUpdateInfo);
    res.json(editedUser);
  } catch (err) {
    console.log(err);
    res
      .status(500)
      .json({ err, message: err.messsage || "Could not edit this user." });
  }
}

export const UsersController = {
  postCreateNewUserCtrl,
  postVerifyUserEmailCtrl,
  postLoginUserCtrl,
  changeUserAdminRoleCtrl,
  patchEditUserCtrl,
};
