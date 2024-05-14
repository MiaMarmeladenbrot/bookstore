// nur admin hat berechtigung: Authentifizierung via jwt im usersRouter ✅
//  .patch("/api/v1/users/:userId/changeRole", doJwtAuth, UsersController.changeUserAdminRoleCtrl );
// hier dann als erstes abfragen, ob isAdmin des authentifizierten Users true ist ✅
// falls ja: userId aus req.params aus Ctrl im Users-model finden ✅
// status von isAdmin dieser userId aufs Gegenteil setzen ✅
// User + neuen Status returnen ✅

import { User } from "../../models/User.js";
import { userToView } from "../../utils/userToView.js";

export async function changeUserAdminRole({ adminUserId, userId, isAdmin }) {
  const adminUser = await User.findById(adminUserId);
  if (!adminUser.isAdmin)
    throw new Error(
      "You are not authorized to change the role of this user.",
      userId
    );

  const user = await User.findById(userId);
  if (!user) throw new Error("User not found with this id.");

  const changedUser = await User.findByIdAndUpdate(
    userId,
    // { $set: { isAdmin: isAdmin } },
    { isAdmin: isAdmin },
    { new: true }
  );

  return { user: userToView(changedUser), isAdmin: { isAdmin } };
}
