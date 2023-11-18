import { Nutrition } from "./nutrition";
import { Tag } from "./tag";

export interface Recipe {
  id: string;
  name: string;
  headline: string;
  image: string;
  prepTime: PrepTime;
  tags: Tag[];
  nutrition: Nutrition;
}

export type PrepTimeUnit = "M" | "H";

export type PrepTime = `PT${number}${PrepTimeUnit}`;
