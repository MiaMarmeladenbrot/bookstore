import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

export function createToken(user, tokenType = "access") {
  const jwtSecret = process.env.JWT_SECRET;

  const issuedAtSeconds = Math.ceil(Date.now() / 1000);

  const tokenPayload = {
    sub: user._id,
    type: tokenType,
    iat: issuedAtSeconds,
  };

  return jwt.sign(tokenPayload, jwtSecret, { expiresIn: "1h" });
}
