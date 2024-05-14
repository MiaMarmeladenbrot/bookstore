// User finden im user-Model ✅
// sixDigitCode mit dem im gefundenen User abgleichen ✅
// isEmailVerified des Users auf true setzen ✅

import { User } from "../../models/User.js";

export async function verifyUserEmail({ userId, sixDigitCode }) {
  const user = await User.findById(userId);
  if (!user) throw new Error("Could not find user with the id ", userId);

  const correctCode = sixDigitCode === user.sixDigitCode;
  if (!correctCode) throw new Error("Invalid six digit code, please try again");

  user.isEmailVerified = true;
  await user.save();

  return { message: "You can now login - have fun shopping!" };
}
