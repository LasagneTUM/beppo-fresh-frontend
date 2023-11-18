import styles from './recipe-page.module.css';
import exampleImage from './example-image.avif';
import Button from '../button/button';

export function RecipePage() {
  return <div>
    <div className={styles.breadcrumbsBackground}>
      <ul className={styles.breadcrumbs}>
        <li>HelloFresh</li>
        <li>Rezepte</li>
        <li>Mexikanische Rezepte</li>
        <li>Tacos mit Räuchertofu & Mango-Paprika-Salsa</li>
      </ul>
    </div>
    <img className={styles.recipeImage} src={exampleImage} alt="Recipe Product Image" />
    <main className={styles.main}>
      <div>
        <h1>Tacos mit Räuchertofu & Mango-Paprika-Salsa</h1>
        <h2>Bei diesem Gericht wird 50% weniger CO2e durch Zutaten verursacht als bei einem durchschnittlichen HelloFresh Rezept</h2>
      </div>
      <Button>Bis zu 120€ Rabatt + Gratis-Dessert</Button>
      <hr />
      <div>
        <p>
          Du möchtest bunt und mit vielen frischen Zutaten kochen und genießen? Dann ist die mexikanische Küche ganz bestimmt etwas für Dich! Unser heutiges Rezept hat alles, was es braucht, um Dich zu überzeugen!
        </p>
        <p>Tags: Klimaheld • Vegan • Ohne Milchprodukte</p>
        <p>Allergene: Weizen • Soja</p>
        <p>Bitte beachte auch die Informationen zu Inhaltsstoffen und Allergenen auf dem Produktetikett.</p>
      </div>
    </main>
  </div>
}