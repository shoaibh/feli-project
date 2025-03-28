import jwt from "jsonwebtoken";

import { IUser } from "../models/user.model";

export const createJWTToken = (user: IUser) => {
  const token = jwt.sign(
    { id: user._id, email: user.email },
    process.env.JWT_SECRET!,
    {
      expiresIn: "1h",
    },
  );
  return token;
};
