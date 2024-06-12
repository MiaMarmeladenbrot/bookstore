import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

export function createToken(user) {
  const jwtSecret = process.env.JWT_SECRET;

  const tokenPayload = {
    sub: user._id,
    isAdmin: user.isAdmin,
  };

  const accessToken = jwt.sign(tokenPayload, jwtSecret, { expiresIn: "1w" });
  return accessToken;
}
