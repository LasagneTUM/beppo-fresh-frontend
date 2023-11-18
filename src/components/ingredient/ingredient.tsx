import styles from './ingredient.module.css';
import { Root, Trigger, Portal, Content, Item, Label, Arrow } from '@radix-ui/react-dropdown-menu';

export type IngredientProps = {
  amount: string;
  children: string;
  additionalInfo?: string;
  imageLink: string;
};

export function Ingredient({ amount, children, additionalInfo, imageLink }: IngredientProps) {
  return <li className={styles.ingredient}>
    <Root>
      <Trigger asChild>
        <div>
          <img src={imageLink} alt={`Image of ${children}`} />
          <div>
            {amount}<br />
            {children}
            {additionalInfo && <><br />({additionalInfo}.)</>}
          </div>
        </div>
      </Trigger>
      <Portal>
        <Content className={styles.DropdownMenuContent} sideOffset={5}>
          <Label className={styles.DropdownMenuLabel}>Help me recommending your favorite food :)</Label>
          <Item className={styles.DropdownMenuItem}>
            I don't like {children}.
          </Item>
          <Item className={styles.DropdownMenuItem}>
            {children} is yummy!
          </Item>
          <Arrow className={styles.DropdownMenuArrow} />
        </Content>
      </Portal>
    </Root>
  </li>;
}