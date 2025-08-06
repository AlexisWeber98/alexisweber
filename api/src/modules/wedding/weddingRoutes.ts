import express from "express";
import {
  postGuestController,
  getGuestsController,
  deleteGuestController,
} from "./weddingControllers.js";

export const weddingRouter = express.Router();

weddingRouter.post("/guest", postGuestController);
weddingRouter.get("/guest", getGuestsController);
weddingRouter.delete("/guest", deleteGuestController);
