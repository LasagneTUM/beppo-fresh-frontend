import styles from './recipe-page.module.css';
import exampleIngredient from './example-ingredient.avif';
import exampleStep from './example-step.avif';
import Button from '../button/button';
import { Ingredient } from '../ingredient/ingredient';
import {
  Provider,
  Root,
  Title,
  Description,
  Action,
  Viewport
} from '@radix-ui/react-toast';
import { useState } from 'react';
import { useRecipe } from '../../network/useRecipe';
import { Navigate } from 'react-router';
import { Tag } from '../tag/tag';

export function RecipePage() {
  const [open, setOpen] = useState(false);
  const setToast = () => {
    setOpen(true);
  };

  const recipe = useRecipe();

  const [goHome, setGoHome] = useState(false);
  if (goHome) {
    return <Navigate to="/" />;
  }

  return <Provider swipeDirection="right">
    <div>
      <div className={styles.breadcrumbsBackground}>
        <ul className={styles.breadcrumbs}>
          <li>HelloFresh</li>
          <li>Rezepte</li>
          <li>{recipe.name}</li>
        </ul>
      </div>
      <img className={styles.recipeImage} src={recipe.image} alt="Recipe Product Image" />
      <main className={styles.main}>
        <div className={styles.recipeHead}>
          <div className={styles.recipeHeadTitles}>
            <h1>{recipe.name}</h1>
            <h2>{recipe.headline}</h2>
          </div>
          <Button>Bis zu 120€ Rabatt + Gratis-Dessert</Button>
          <hr />
          <div>
            <p>
              When cooking a date-night dinner for a loved one (or indulging in some personal TLC), it’s best to keep it simple, cupid. You’re more likely to impress by showing off your mastery of the classics than by breaking out the brulee blowtorch and nearly setting something on fire. So say “I love you” with a meal that never fails to please: steak and potatoes with creamed veggies and a peppercorn sauce. Call it steak au poivre if you wanna get fancy.
            </p>
            <p>Tags: {recipe.tags.map((tag, i) => <><Tag onFeedback={setToast}>{tag.name}</Tag>{i !== recipe.tags.length - 1 && ' • '}</>)}</p>
            <p>Allergenes: Milk • Soja</p>
          </div>
          <div>
            <div><span>Total Time</span> <span>{recipe.prepTime} min</span></div>
            <div><span>Difficulty</span> <span>Easy</span></div>
          </div>
        </div>
        <div className={styles.ingredients}>
          <h2>Ingredients</h2>
          <ul>
            {recipe.ingredients.map(recipe => <Ingredient onFeedback={setToast} imageLink={recipe.imageLink} amount="250 g">{recipe.name}</Ingredient>)}
          </ul>
          <hr />
          <h2>Not included in your delivery</h2>
          <ul>
            <Ingredient onFeedback={setToast} imageLink={exampleIngredient} amount='1 Esslöffel'>Olivenöl</Ingredient>
            <Ingredient onFeedback={setToast} imageLink={exampleIngredient} amount='nach Geschmack'>Salz</Ingredient>
          </ul>
        </div>
        <div className={styles.utensils}>
          <h2>Utensils</h2>
          <ul>
            <li>Baking Sheet</li>
            <li>Large Pan</li>
            <li>Pan</li>
          </ul>
        </div>
        <div>
          <h2>Zubereitung</h2>
          <div className={styles.steps}>
            <div className={styles.step}>
              <img src={exampleStep} alt="Step image" />
              <div>
                <span>1</span>
                <div>
                  <p>Wash and dry all produce. Preheat oven to 400 degrees. Cut potatoes into ¾-inch-thick wedges. Remove and discard stems and ribs from kale. Chop or tear leaves into 1-inch pieces. Halve, peel, and mince shallot. Use a mallet or heavy pan to pound and crush peppercorns in their bag until coarsely ground.</p>
                </div>
              </div>
            </div>
            <div className={styles.step}>
              <img src={exampleStep} alt="Step image" />
              <div>
                <span>2</span>
                <div>
                  <p>Toss potatoes with a drizzle of oil and a pinch of salt and pepper on a baking sheet or baking dish. Roast in oven until tender and lightly browned, 30-35 minutes, tossing halfway through.</p>
                </div>
              </div>
            </div>
            <div className={styles.step}>
              <img src={exampleStep} alt="Step image" />
              <div>
                <span>3</span>
                <div>
                  <p>Melt 1 TBSP butter in a large pan over medium heat. Add kale and a splash of water. Cook until leaves are completely wilted and very tender, 4-5 minutes. Season with salt and pepper. Remove from heat, keeping kale in pan.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main >
    </div >

    <Root className={styles.ToastRoot} open={open} onOpenChange={setOpen} duration={5000}>
      <Title className={styles.ToastTitle}>You have great taste!</Title>
      <Description asChild>
        <span>I've improved my recommendations for you.</span>
      </Description>
      <Action className={styles.ToastAction} asChild altText="Go home">
        <Button onClick={() => setGoHome(true)}>Show me</Button>
      </Action>
    </Root>
    <Viewport className={styles.ToastViewport} />
  </Provider>;
}