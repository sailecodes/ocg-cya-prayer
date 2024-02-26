import { StatusCodes } from "http-status-codes";

import silentPrayerModel from "../models/silentPrayerModel.js";

export const createSilentPrayer = async (req, res) => {
  await silentPrayerModel.create({ silentPrayer: req.body.silentPrayer });

  return res.status(StatusCodes.CREATED).json({ msg: "(Server message) Silent prayer created" });
};
