import styles from "./gallery.module.css";
import RecipeCard from "../recipe-card/recipe-card";
import { Recipe } from "../../types/recipe";

interface GalleryProps {
  recipes: Recipe[];
}

export default function Gallery({ recipes }: GalleryProps) {
  return (
    <div className={styles.gallery}>
      {recipes.map((recipe) => (
        <RecipeCard recipe={recipe} />
      ))}
    </div>
  );
}
