import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();
const jwtSecret = process.env.JWT_SECRET;

export async function doJwtAuth(req, res, next) {
  const _invalidAuth = (message) =>
    res.status(401).json({ message: message || "Invalid auth" });

  if (!req.headers.authorization) return _invalidAuth();

  const [authType, tokenString] = req.headers.authorization.split(" ");
  if (authType !== "Bearer" || !tokenString) return _invalidAuth();

  try {
    const verifiedClaims = jwt.verify(tokenString, jwtSecret);
    // console.log(verifiedClaims);
    // {
    //     sub: '66430cd7212f413eb9449ccd',
    //     type: 'access',
    //     iat: 1715670776,
    //     exp: 1715674376
    //   }

    req.authenticatedUserId = verifiedClaims.sub;
    next();
  } catch (err) {
    console.log(err);
    return _invalidAuth();
  }
}
