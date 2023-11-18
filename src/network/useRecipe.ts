import { useParams } from "react-router";
import { Options } from "../types/options";
import { useGet } from "./useGet";

export function useRecipe() {
  const { recipeId } = useParams();
  return useGet<Options>(`recipe/${recipeId}`, [])
}
