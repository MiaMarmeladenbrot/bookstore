import { User } from "../models/User.js";
import { userToView } from "../utils/userToView.js";

export async function editUser(userId, userUpdateInfo) {
  // # noch einfügen: entweder muss authenticatedUser der User sein oder admin-Status haben; dafür Route doch ändern mit params :userId? Und dann hier Abgleich, ob params.id und userId gleich sind und nur wenn sie das sind oder authenticatedUser admin ist, darf geändert werden

  const user = await User.findById(userId);
  if (!user) throw new Error("Could not find this user.");

  const updatedUser = await User.findByIdAndUpdate(
    userId,
    { $set: userUpdateInfo },
    { new: true }
  );

  return userToView(updatedUser);
}
