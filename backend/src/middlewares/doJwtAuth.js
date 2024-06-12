import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();
const jwtSecret = process.env.JWT_SECRET;

export const doJwtAuth =
  ({ onlyAdmins } = { onlyAdmins: false }) =>
  (req, res, next) => {
    try {
      console.log(req.cookies.accessToken);

      const { accessToken } = req.cookies;
      console.log(accessToken);
      if (!accessToken) throw new Error("not authorized");

      const verifiedToken = jwt.verify(accessToken, jwtSecret);
      console.log(verifiedToken);

      if (onlyAdmins && !verifiedToken.isAdmin)
        throw new Error("Only admins are authorized to do this.");

      req.authenticatedUser = {
        _id: verifiedToken.sub,
        isAdmin: verifiedToken.isAdmin,
      };

      next();
    } catch (error) {
      console.log(error);
      return res
        .status(401)
        .json({ error, message: error.message || "not authorized" });
    }
  };
