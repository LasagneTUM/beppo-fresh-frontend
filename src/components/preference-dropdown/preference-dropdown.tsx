import { ReactNode } from "react";
import { Root, Trigger, Portal, Content, Item, Label, Arrow } from '@radix-ui/react-dropdown-menu';
import { IconCheck, IconX } from "@tabler/icons-react";
import styles from "./preference-dropdown.module.css";
import { post } from "../../network/post";
import { useUser } from "../../hooks/use-user";
import { PreferenceUpdate } from "../../types/preferenceUpdate";

export type PreferenceDropdownProps = {
  children: ReactNode | string | (ReactNode | string)[] | null | undefined;
  preferenceName: string;
  onFeedback?: () => void;
};

export function PreferenceDropdown({ children, onFeedback, preferenceName }: PreferenceDropdownProps) {
  const [user] = useUser();

  const saveFeedback = async (up: boolean) => {
    if (!user) return;

    await post("preferences/add", {
      user,
      preference_updates: [{
        preference: preferenceName,
        preference_change: up ? 2 : -2,
      }],
    } satisfies PreferenceUpdate);

    onFeedback?.();
  };

  return <Root>
    <Trigger asChild>
      {children}
    </Trigger>
    <Portal>
      <Content className={styles.DropdownMenuContent} sideOffset={5}>
        <Label className={styles.DropdownMenuLabel}>Help me to recommend you your favorite food :)</Label>
        <Item className={styles.DropdownMenuItem} onClick={() => saveFeedback(true)}>
          <IconCheck /> <span>{preferenceName} is yummy!</span>
        </Item>
        <Item className={styles.DropdownMenuItem} onClick={() => saveFeedback(false)}>
          <IconX /> <span>I don't like {preferenceName}.</span>
        </Item>
        <Arrow className={styles.DropdownMenuArrow} />
      </Content>
    </Portal>
  </Root>;
}