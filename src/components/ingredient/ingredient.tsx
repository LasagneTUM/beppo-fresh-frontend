import { IconCheck, IconX } from '@tabler/icons-react';
import styles from './ingredient.module.css';
import { Root, Trigger, Portal, Content, Item, Label, Arrow } from '@radix-ui/react-dropdown-menu';

export type IngredientProps = {
  amount: string;
  children: string;
  additionalInfo?: string;
  imageLink: string;
  onFeedback: () => void;
};

export function Ingredient({ amount, children, additionalInfo, imageLink, onFeedback }: IngredientProps) {
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
          <Item className={styles.DropdownMenuItem} onClick={onFeedback}>
            <IconCheck /> <span>I don't like {children}.</span>
          </Item>
          <Item className={styles.DropdownMenuItem} onClick={onFeedback}>
            <IconX /> <span>{children} is yummy!</span>
          </Item>
          <Arrow className={styles.DropdownMenuArrow} />
        </Content>
      </Portal>
    </Root>
  </li>;
}