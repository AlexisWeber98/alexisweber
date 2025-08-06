import { AuthenticationError, ConflictError } from "../../utils/errors.js";
import { generateToken } from "../../utils/jwt.js";
import { Logger } from "../../utils/logger.js";
import { userEmail, userPassword } from "../../config/config.js";

export const login = (email: string, password: string) => {
  if (email !== userEmail || password !== userPassword) {
    Logger.error("Invalid login attempt: email, password");
    throw new AuthenticationError("Invalid Credentials");
  }

  const user = {
    email,
    password,
    name: "Ale",
  };

  const token = generateToken(user);
  return token;
};
