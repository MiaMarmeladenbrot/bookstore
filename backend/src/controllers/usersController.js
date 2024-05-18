import { UsersService } from "../services/index.js";

async function postCreateNewUserCtrl(req, res) {
  try {
    const newUser = req.body;
    const result = await UsersService.registerUser(newUser);
    res.json({ result });
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
    const result = await UsersService.verifyUserEmail(verifyEmailInfo);
    res.json({ result });
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

    const result = await UsersService.loginUser(loginInfo);
    res.json({ result });
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
    const result = await UsersService.changeUserAdminRole(updateInfo);
    res.json({ result });
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
    const authenticatedUserId = req.authenticatedUserId;
    const userId = req.params.userId;

    const result = await UsersService.editUser(
      authenticatedUserId,
      userId,
      userUpdateInfo
    );
    res.json({ result });
  } catch (err) {
    console.log(err);
    res
      .status(500)
      .json({ err, message: err.message || "Could not edit this user." });
  }
}

// async function logoutUser(req, res) {
//   req.session.refreshToken = null;
//   res.status(200).json({ result: { message: "You are now logged out." } });
// }

export const UsersController = {
  postCreateNewUserCtrl,
  postVerifyUserEmailCtrl,
  postLoginUserCtrl,
  changeUserAdminRoleCtrl,
  patchEditUserCtrl,
};
