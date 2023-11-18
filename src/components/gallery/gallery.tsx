import styles from "./gallery.module.css";
import RecipeCard from "../recipe-card/recipe-card";

interface GalleryProps {
  recipes: unknown[];
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
