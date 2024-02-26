import { StatusCodes } from "http-status-codes";

import silentPrayerModel from "../models/silentPrayerModel.js";

export const createSilentPrayer = async (req, res) => {
  console.log(req.body);

  return res.status(StatusCodes.CREATED).json({ msg: "(Server message) Silent prayer created" });
};
