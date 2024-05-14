// Post-Anfrage mit email und password im req.body ✅
// prüfen, ob User existiert ✅
// prüfen, ob Email verifiziert ist ✅
// prüfen, ob Passwort korrekt ist ✅
// Token erstellen mit externer createToken() ✅
// returnen userToView + Token ✅

import { User } from "../models/User.js";
import { createToken } from "../utils/createToken.js";
import { hash } from "../utils/hash.js";
import { userToView } from "../utils/userToView.js";

export async function loginUser({ email, password }) {
  const user = await User.findOne({ email });
  if (!user) throw new Error("Could not find user with the email: ", email);

  if (!user.isEmailVerified) throw new Error("Email is not verified");

  const passwordHash = hash(`${password}${user.passwordSalt}`);
  const correctPassword = passwordHash === user.passwordHash;
  if (!correctPassword) throw new Error("Password wrong");

  const accessToken = createToken(user);

  return { user: userToView(user), tokens: { accessToken } };
}
