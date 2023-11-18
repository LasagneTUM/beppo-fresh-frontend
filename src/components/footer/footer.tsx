import { IconBrandGithub } from "@tabler/icons-react";
import styles from "./footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.credits}>
        © 2023 <a href="https://github.com/LasagneTUM">LasagneTUM</a> for{" "}
        <a href="https://www.hellofresh.de">HelloFresh</a> at{" "}
        <a href="https://hack.tum.de/">HackaTUM</a>
      </div>
      <a href="https://github.com/LasagneTUM" className={styles.icons}>
        <IconBrandGithub />
      </a>
    </footer>
  );
}
