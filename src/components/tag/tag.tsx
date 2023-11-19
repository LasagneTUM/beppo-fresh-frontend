import { PreferenceDropdown } from '../preference-dropdown/preference-dropdown';
import styles from './tag.module.css';

export function Tag({ children, onFeedback }: { children: string, onFeedback?: () => void; }) {
  return <PreferenceDropdown onFeedback={onFeedback} preferenceName={children}>
    <span className={styles.tag}>{children}</span>
  </PreferenceDropdown>;
}