import { Recipe } from "../../types/recipe";
import styles from "./recipe-card.module.css";

interface RecipeCardProps {
  recipe: Recipe;
}

export default function RecipeCard({ recipe }: RecipeCardProps) {
  // TODO
  return <div className={styles.card}>{recipe.name}</div>;
}
