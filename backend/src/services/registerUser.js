// um User zu registieren, brauchen wir firstname, lastname, email, pw aus req.body ✅
// dann muss pw gehasht werden ✅
// außerdem muss ein sixDigitCode erstellt werden (sollte automatisiert passieren durch user-Model) ✅
// isEmailVerified sollte automatisiert auf false stehen ✅
// eine Verifizierungsmail sollte rausgeschickt werden via google apis gmail ✅
// returnen wollen wir UserDaten ohne hash-infos, sixDigitCode, isEmailVerified ✅

import { User } from "../models/User.js";
import { generateRandomSalt, hash } from "../utils/hash.js";
import { sendEmail } from "../utils/sendEmail.js";

export async function registerUser({ firstname, lastname, email, password }) {
  const foundUser = await User.findOne({ email });
  if (foundUser) throw new Error("User with this email already exists.");

  const passwordSalt = generateRandomSalt();
  const passwordHash = hash(`${password}${passwordSalt}`);

  const user = await User.create({
    firstname,
    lastname,
    email,
    passwordHash,
    passwordSalt,
    // isEmailVerified, // müsste durch user-Model automatisch entstehen mit default-Wert false
    // sixDigitCode, // müsste durch user-Model automatisch entstehen mit default-Wert false
  });

  await sendEmailVerification(user);

  const userToView = {
    _id: user._id,
    firstname: user.firstname,
    lastname: user.lastname,
    email: user.email,
  };

  return userToView;
}

async function sendEmailVerification(user) {
  return sendEmail({
    to: user.email,
    subject: "Welcome to our shop!",
    text: `Hey there and welcome! We are happy to have you!
    Please verify your email address with the following code:
    ${user.sixDigitCode}`,
  });
}
