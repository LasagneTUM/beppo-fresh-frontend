import styles from "./header.module.css";

export default function header() {
  return (
    <div className={styles.header}>
      <div className={styles.logoutBtn}>Logout</div>
    </div>
  );
}
