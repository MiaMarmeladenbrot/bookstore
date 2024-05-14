import { User } from "../models/User.js";
import { userToView } from "../utils/userToView.js";

export async function editUser(userId, userUpdateInfo) {
  const user = await User.findById(userId);
  if (!user) throw new Error("Could not find this user.");

  const updatedUser = await User.findByIdAndUpdate(
    userId,
    { $set: userUpdateInfo },
    { new: true }
  );

  return userToView(updatedUser);
}
