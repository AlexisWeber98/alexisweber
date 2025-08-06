import { Request, Response } from "express";
import { login } from "./usersService.js";
import serverResponse from "../../utils/response.js";
import { ValidationError, AuthenticationError } from "../../utils/errors.js";
import { Logger } from "../../utils/logger.js";
import { catchAsync } from "../../utils/catchAsync.js";

export const loginController = catchAsync(
  async (req: Request, res: Response) => {
    const { email, password } = req.body;

    if (!email || !password)
      throw new ValidationError("Email or password not found");

    const data = login(email.toString(), password.toString());

    if (!data) throw new ValidationError("User not found");

    res.status(200).json(serverResponse("Ok", data));
  },
);
