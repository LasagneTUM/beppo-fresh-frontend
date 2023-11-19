import { Nutrition } from "./nutrition";
import { Tag } from "./tag";

export interface Recipe {
  id: string;
  name: string;
  headline: string;
  image: string;
  /** Preparation time in min */
  prepTime: number;
  tags: Tag[];
  nutrition: Nutrition;
  websiteURL: string;
  ingredients: Tag[];
}
