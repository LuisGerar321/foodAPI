import express, { Router } from "express";
import { createFoodSchema, getFoodSchema } from "../validator/food";
import { validateBody, validateParam } from "../libraries/validator";

export const foodRouter: Router = express.Router();
import {getAllMeals, getMeal, deleteMeal, editMeal, createMeal} from "../controller/foodController"
foodRouter.route("/meals").get(getAllMeals);
foodRouter.route("/meal/:id").get(getMeal);
foodRouter.route("/meal/:id").put(validateParam(getFoodSchema), editMeal);
foodRouter.route("/meal").post(validateBody(createFoodSchema), createMeal);
foodRouter.route("/meal/:id").delete(validateParam(getFoodSchema), deleteMeal);

