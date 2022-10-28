import { Request } from "express";

export const parseId = (req: Request) => {
  const { id } = req?.params; 
  if (!id) return null;
  return Number(id);
}
