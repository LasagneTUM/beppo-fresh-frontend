import classNames from "classnames";
import { Recipe } from "../../types/recipe";
import styles from "./recipe-card.module.css";
import { forwardRef } from "react";

interface RecipeCardProps {
  recipe: Recipe;
  className?: string;
}

const RecipeCard = forwardRef(
  (
    { recipe, className }: RecipeCardProps,
    ref: React.ForwardedRef<HTMLDivElement>
  ) => {
    return (
      <div className={classNames(styles.card, className)} ref={ref}>
        <img className={styles.img} src={recipe.image} alt={recipe.name}></img>
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
      </div>
    );
  }
);
export default RecipeCard;
