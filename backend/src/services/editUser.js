// userId und authId müssen gleich sein ODER authId muss admin-Status haben
// andernfalls ist Anfragender nicht authorisiert, alle den User zu ändern

import { User } from "../models/User.js";
import { userToView } from "../utils/userToView.js";

export async function editUser(authenticatedUserId, userId, userUpdateInfo) {
  const user = await User.findById(userId);
  if (!user) throw new Error("User not found.");

  const authUser = await User.findById(authenticatedUserId);
  if (user !== authUser && !authUser.isAdmin)
    throw new Error("You are not authorized to edit this user.");

  const updatedUser = await User.findByIdAndUpdate(
    userId,
    { $set: userUpdateInfo },
    { new: true }
  );

  return userToView(updatedUser);
}
