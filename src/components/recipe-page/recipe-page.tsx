import styles from './recipe-page.module.css';
import exampleImage from './example-image.avif';
import exampleIngredient from './example-ingredient.avif';
import exampleStep from './example-step.avif';
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
        <div className={styles.recipeHeadTitles}>
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
        <div>
          <div><span>Gesamtzeit</span> <span>30 Minuten</span></div>
          <div><span>Arbeitszeit</span> <span>20 Minuten</span></div>
          <div><span>Schwierigkeitsgrad</span> <span>Mittel</span></div>
        </div>
      </div>
      <div className={styles.ingredients}>
        <h2>Zutaten</h2>
        <ul>
          <li><img src={exampleIngredient} alt="Ingredient image" /><div>200 g<br />Weizentortillas<br />(Enthält Weizen.)</div></li>
          <li><img src={exampleIngredient} alt="Ingredient image" /><div>175 g<br />geräucherter Tofu<br />(Enthält Soja.)</div></li>
          <li><img src={exampleIngredient} alt="Ingredient image" /><div>1 piece<br />Mango</div></li>
          <li><img src={exampleIngredient} alt="Ingredient image" /><div>2 piece<br />rote Spitzpaprika</div></li>
        </ul>
        <hr />
        <h2>Was du zu Hause haben solltest</h2>
        <ul>
          <li><img src={exampleIngredient} alt="Ingredient image" /><div>1 Esslöffel Olivenöl</div></li>
          <li><img src={exampleIngredient} alt="Ingredient image" /><div>nach Geschmack Salz</div></li>
        </ul>
      </div>
      <div className={styles.utensils}>
        <h2>Kochutensilien</h2>
        <ul>
          <li>Reibe</li>
          <li>Große Schüssel</li>
          <li>Kleine Schale</li>
          <li>Große Pfanne</li>
        </ul>
      </div>
      <div>
        <h2>Zubereitung</h2>
        <div className={styles.step}>
          <img src={exampleStep} alt="Step image" />
          <span>1</span>
          <div>
            <p>Mango schälen, Fruchtfleisch vom Kern schneiden und in 1 cm Würfel schneiden.</p>
            <p>Spitzpaprika halbieren, entkernen und in 1 cm Würfel schneiden.</p>
            <p>Zwiebel halbieren und in feine Streifen schneiden.</p>
            <p>Knoblauch fein hacken.</p>
            <p>Räuchertofu mithilfe einer Gemüsereibe in feine Streifen hobeln.</p>
            <p>Tipp: Es ist kein Problem, dass der Räuchertofu dabei etwas auseinanderfällt.</p>
          </div>
        </div>
      </div>
    </main >
  </div >;
}