import { Food } from "../models/Food"

interface FoodParams {
  id: string,
  cost: number
}

export default class FoodService {
  constructor(){
    /**Constructor*/
  }
  static async getAll(): Promise<Food[]> {
    const data: Food[] = await Food.findAll();
    return data;
  }
  static async getOne(id: number): Promise<Food | null> {
    console.log("::::id ", id);
    
    const data: Food | null = await Food.findByPk(id);
    console.log("::: ", data);
    
    return data;
  }
  static async editOne(id: number, params: FoodParams): Promise<Food | 404> {
    const data: Food | null = await Food.findByPk(id)
    if (!data) return 404;
    data?.update(params);
    return data;
  }
  static async createOne(params: FoodParams): Promise<Food | null>{
    const data: Food | null = await Food.create({...params});
    return data;
  }
  static async exist(id: number): Promise<boolean> {
    const isDataExist: Food | null = await Food.findByPk(id);
    if (!isDataExist) return false;
    return !!isDataExist;
  }
  static async deleteOne(id: number): Promise<boolean | 404> {
    const data: Food | null = await Food.findOne({where: {
      id,
    }});
    if (!data) return 404;
    data?.destroy();
    return true;
  }
}

