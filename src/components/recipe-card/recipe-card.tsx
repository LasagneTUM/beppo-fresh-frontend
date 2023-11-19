import { Recipe } from "../../types/recipe";
import styles from "./recipe-card.module.css";
import { forwardRef } from "react";
import { Link } from "react-router-dom";

interface RecipeCardProps {
  recipe: Recipe;
}

const RecipeCard = forwardRef(
  ({ recipe }: RecipeCardProps, ref: React.ForwardedRef<HTMLDivElement>) => {
    return (
      <div className={styles.cardRefWrapper} ref={ref}>
        <Link className={styles.card} to={`/recipe/${recipe.id}`}>
          <img
            className={styles.img}
            src={recipe.image}
            alt={recipe.name}
            loading="lazy"
          ></img>
          <div className={styles.paddedWrapper}>
            <h3 className={styles.title}>{recipe.name}</h3>
            <p className={styles.headline}>{recipe.headline}</p>
            <div>
              <b className={styles.prepTime}>{recipe.prepTime} min</b>
              <span className={styles.tags}>
                {recipe.tags.length > 0 && " | "}
                {recipe.tags.map((tag) => tag.name).join(" • ")}
              </span>
            </div>
          </div>
        </Link>
      </div>
    );
  }
);
export default RecipeCard;
