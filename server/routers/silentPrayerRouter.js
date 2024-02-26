import { Router } from "express";

import { createSilentPrayer } from "../controllers/silentPrayerController.js";
import { validateSilentPrayer } from "../middleware/validationMiddleware.js";

const silentPrayerRouter = Router();

silentPrayerRouter.route("/").post(validateSilentPrayer, createSilentPrayer);

export default silentPrayerRouter;
