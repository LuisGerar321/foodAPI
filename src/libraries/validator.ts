import joi from "joi"
import {Request, Response} from "express";

const validatorOptions = {
  abortEarly: false,
  allowUnknown: false,
  stripUnknown: true,
  convert: false,
  errors: {
    escapeHtml: true,
  },
};

export function validateBody(schema: joi.ObjectSchema) {
  return (req: Request, res: Response,  next: Function) => {
    const {error, value} = schema.validate(req.body, validatorOptions);
    if (error) {
      res.status(400).json({
        message: "Bad request",
        data: error.message,
      })
      return;
    }
    req.body = value;
    next();
  };
}


export function validateParam(schema: joi.ObjectSchema) {
  return (req: Request, res: Response,  next: Function) => {
    const {error, value} = schema.validate(req.params, validatorOptions);
    if (error) {
      res.status(400).json({
        message: "Bad request",
        data: error.message,
      })
      return;
    }
    req.body = value;
    next();
  };
}