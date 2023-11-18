import styles from './recipe-page.module.css';

export function RecipePage() {
  return <div>
    <ul className={styles.breadcrumbs}>
      <li>HelloFresh</li>
      <li>Rezepte</li>
      <li>Mexikanische Rezepte</li>
      <li>Tacos mit Räuchertofu & Mango-Paprika-Salsa</li>
    </ul>

  </div>
}