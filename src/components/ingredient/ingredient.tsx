import styles from './ingredient.module.css';
import { PreferenceDropdown } from '../preference-dropdown/preference-dropdown';
import { useState } from 'react';

export type IngredientProps = {
  amount: string;
  children: string;
  additionalInfo?: string;
  imageLink?: string;
  onFeedback: () => void;
};

export function Ingredient({ amount, children, additionalInfo, imageLink, onFeedback }: IngredientProps) {
  const [hasImage, setHasImage] = useState(true);

  return <li className={styles.ingredient}>
    <PreferenceDropdown onFeedback={onFeedback} preferenceName={children}>
      <div>
        {
          hasImage && imageLink
            ? <img className={styles.image} src={imageLink} alt={`Image of ${children}`} onError={() => setHasImage(false)} />
            : <div className={styles.imagePlaceholder}>{children.substring(0, 1)}</div>}
        <div>
          {amount}<br />
          {children}
          {additionalInfo && <><br />({additionalInfo}.)</>}
        </div>
      </div>
    </PreferenceDropdown>
  </li>;
}