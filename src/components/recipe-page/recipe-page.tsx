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
      <div className={styles.recipeHead}>
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
      </div>
      <div>
        <h2>Zutaten</h2>
        <ul>
          <li>200 g Weizentortillas (Enthält Weizen.)</li>
          <li>175 g geräucherter Tofu (Enthält Soja.)</li>
          <li>1 piece Mango</li>
          <li>2 piece rote Spitzpaprika</li>
        </ul>
        <hr />
        <h2>Was du zu Hause haben solltest</h2>
        <ul>
          <li>1 Esslöffel Olivenöl</li>
          <li>nach Geschmack Salz</li>
        </ul>
      </div>
      <div>
        Kochutensilien
        <ul>
          <li>Reibe</li>
          <li>Große Schüssel</li>
          <li>Kleine Schale</li>
          <li>Große Pfanne</li>
        </ul>
      </div>
      <div>
        <h2>Zubereitung</h2>
        <span>1</span>
        <div>
          Mango schälen, Fruchtfleisch vom Kern schneiden und in 1 cm Würfel schneiden.

          Spitzpaprika halbieren, entkernen und in 1 cm Würfel schneiden.

          Zwiebel halbieren und in feine Streifen schneiden.

          Knoblauch fein hacken.

          Räuchertofu mithilfe einer Gemüsereibe in feine Streifen hobeln.

          Tipp: Es ist kein Problem, dass der Räuchertofu dabei etwas auseinanderfällt.
        </div>
      </div>
    </main >
  </div >;
}