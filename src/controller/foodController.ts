import { Request, RequestHandler, Response } from "express";
import { Food } from "../models/Food";
import FoodService from "../services/FoodService";

export const getAllMeals = async (req: Request, res: Response) => {
  const meals: Food[] = await FoodService.getAll();
  res.status(200).json({
    message: "All food was fetched",
    data: meals, 
  })
}

export const getMeal = async (req: Request, res: Response) => {
  const {id} = req.params;
  console.log(id);
  
  if (!id) {
    res.status(400).json({
      message: "Bad request" 
    })
  }
  const meal: Food | null = await FoodService.getOne(Number(id));
  if (!meal) {
    return res.status(404).json({
      message: "No meal fetched",
      data: meal, 
    })
  }
  res.status(200).json({
    message: "Food was fetched",
    data: meal, 
  })
}


export const editMeal = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { body } = req;
  const meal: Food | 404 = await FoodService.editOne(Number(id), body);
  if (meal === 404) {
    return res.status(meal as number).json({
      message: "Not found",
      data: []
    })
  }
  res.status(204).json({
    message: "All food was fetched",
    data: meal, 
  })
}

export const createMeal: RequestHandler = async (req: Request, res: Response) => {
  const body  = req.body;
  const isOnDB: Food | null = await FoodService.getOne(body?.id);


    
  if (isOnDB) {
    res.status(200).json({
      message: "Food is alrready on DB",
      data: isOnDB
    })
    return;
  };

  const meal: Food | null = await FoodService.createOne(body);
  res.status(201).json({
    message: "New food created",
    data: meal, 
  })
}

export const deleteMeal = async (req: Request, res: Response) => {
  const { id } = req.params;
  const data: boolean | 404 = await FoodService.deleteOne(Number(id));
  if (data !== true){
    return res.status(data as number).json({
      message: "Not found",
      data: []
    })
  }
  res.status(204).json({
    message: "Delete meal",
    data: {}, 
  })
}