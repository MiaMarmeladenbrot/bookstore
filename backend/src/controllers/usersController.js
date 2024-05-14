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

export const UsersController = {
  postCreateNewUserCtrl,
  postVerifyUserEmailCtrl,
};
