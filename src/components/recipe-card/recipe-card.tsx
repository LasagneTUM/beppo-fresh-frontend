import styles from "./recipe-card.module.css";

interface RecipeCardProps {
  name: unknown;
}

export default function RecipeCard({ name }: RecipeCardProps) {
  // TODO
  return <div className={styles.card}>{name as string}</div>;
}
