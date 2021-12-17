import Joi from "joi";
import Validator from "express-joi-validation";

export const validate = Validator.createValidator({});

export const registerSchema = Joi.object({
  email: Joi.string().required().email(),
});