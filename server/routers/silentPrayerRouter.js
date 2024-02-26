import { Router } from "express";

import { createSilentPrayer } from "../controllers/silentPrayerController.js";

const silentPrayerRouter = Router();

silentPrayerRouter.route("/").post(createSilentPrayer);

export default silentPrayerRouter;
