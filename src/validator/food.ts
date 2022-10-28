import joi from "joi";

export const createFoodSchema: joi.ObjectSchema =  joi.object({
  name: joi.string().required().allow(""),
  price: joi.number().required(),
})

export const getFoodSchema: joi.ObjectSchema = joi.object({
  id: joi.string().required(),
})