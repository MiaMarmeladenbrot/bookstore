import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

export function createToken(user) {
  const jwtSecret = process.env.JWT_SECRET;

  const issuedAtSeconds = Math.ceil(Date.now() / 1000);

  const tokenPayload = {
    sub: user._id,
    type: "access",
    iat: issuedAtSeconds,
    isAdmin: user.isAdmin,
  };

  return jwt.sign(tokenPayload, jwtSecret, { expiresIn: "1h" });
}
