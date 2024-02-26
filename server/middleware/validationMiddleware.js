import mongoose from "mongoose";
import { body, validationResult } from "express-validator";

import { BadRequestError, UnauthenticatedError } from "../errors/customErrors.js";

const validate = (validationValues) => {
  return [
    validationValues,
    (req, res, next) => {
      const errors = validationResult(req);

      if (!errors.isEmpty()) {
        const errorMessages = errors.array().map((error) => error.msg);

        if (errorMessages[0].startsWith("Authentication")) throw new UnauthenticatedError("Authentication invalid");
        else throw new BadRequestError(errorMessages);
      }

      next();
    },
  ];
};

// ==============================================
// Silent prayer routes validation
// ==============================================

export const validateSilentPrayer = validate([
  body("silentPrayer").notEmpty().withMessage("Silent prayer is required"),
]);
