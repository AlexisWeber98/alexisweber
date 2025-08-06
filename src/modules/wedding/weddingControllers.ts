import { Request, Response } from "express";
import { catchAsync } from "../../utils/catchAsync.js";
import { ValidationError } from "../../utils/errors.js";
import {
  postGuestService,
  getAllGuests,
  deleteGuestService,
} from "./weddingService.js";
import serverResponse from "../../utils/response.js";

export const postGuestController = catchAsync(
  async (req: Request, res: Response) => {
    const { name, lastName } = req.body;
    if (!name || !lastName) {
      throw new ValidationError("Name or last name not provided");
    }

    const guest = await postGuestService(
      name.toString().trim().toLowerCase(),
      lastName.toString().trim().toLowerCase(),
    );

    return res.status(201).json(serverResponse("Guest accepted", { guest }));
  },
);

export const getGuestsController = catchAsync(
  async (_req: Request, res: Response) => {
    const guests = await getAllGuests();

    return res.status(200).json(serverResponse("Ok", { guests }));
  },
);

export const deleteGuestController = catchAsync(
  async (req: Request, res: Response) => {
    const { id } = req.body;

    if (!id) {
      throw new ValidationError("Guest ID not provided");
    }

    const guest = await deleteGuestService(id);

    return res.status(200).json(serverResponse("Guest deleted", { guest }));
  },
);
