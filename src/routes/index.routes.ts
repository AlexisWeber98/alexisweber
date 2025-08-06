import express from "express";
import { userRouter } from "../modules/users/userRoutes.js";
import { weddingRouter } from "../modules/wedding/weddingRoutes.js";
import { iaRouter } from "../modules/IAModule/iaRoutes.js";
import { emailRouter } from "../modules/emailModule/emailRoutes.js";

const router = express.Router();

// Rutas de usuarios
router.use("/users", userRouter);

// Rutas de postulaciones
router.use("/wedding", weddingRouter);

router.use("/email", emailRouter);

//Rutas para IA
router.use("/ia", iaRouter);

export default router;
