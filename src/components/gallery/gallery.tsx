import styles from "./gallery.module.css";
import RecipeCard from "../recipe-card/recipe-card";
import { Recipe } from "../../types/recipe";
import FlipMove from "react-flip-move";

interface GalleryProps {
  recipes: Recipe[];
  loading: boolean;
}

export default function Gallery({ recipes, loading }: GalleryProps) {
  // FlipMove options: https://github.com/joshwcomeau/react-flip-move/blob/master/documentation/api_reference.md
  return (
    <>
      <FlipMove
        className={styles.gallery}
        easing="ease-in-out"
        duration="350"
        staggerDurationBy="30"
      >
        {recipes.map((recipe) => (
          <RecipeCard key={recipe.id} recipe={recipe} />
        ))}
      </FlipMove>
      {recipes.length === 0 && (
        <div className={styles.status}>
          {loading ? "loading" : "No recipes found"}
        </div>
      )}
    </>
  );
}
