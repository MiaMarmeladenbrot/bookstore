import mongoose from "mongoose";
import { generateRandomSixDigitCode } from "../utils/sixDigitCode.js";

const userSchema = new mongoose.Schema(
  {
    firstname: { type: String, required: true, trim: true },
    lastname: { type: String, required: true, trim: true },
    email: { type: String, required: true, trim: true },
    isAdmin: { type: Boolean, default: false },
    passwordHash: { type: String, required: true, trim: true },
    passwordSalt: { type: String, required: true, trim: true },
    isEmailVerified: { type: Boolean, default: false },
    sixDigitCode: { type: String, default: () => generateRandomSixDigitCode() },
  },
  { collection: "users", timestamps: true }
);

export const User = mongoose.model("User", userSchema);
