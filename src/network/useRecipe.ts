import { useParams } from "react-router";
import { useGet } from "./useGet";
import { Recipe } from "../types/recipe";

export function useRecipe() {
  const { recipeId } = useParams();
  return useGet<Recipe>(`recipe/${recipeId}`, {
    id: 'loading',
    name: 'loading',
    headline: 'loading',
    image: 'loading',
    prepTime: 0,
    tags: [],
    nutrition: {
      calories: 0,
      protein: 0,
      carbohydrate: 0,
      energy: 0,
    },
    ingredients: [],
    websiteURL: 'loading',
  })
}
