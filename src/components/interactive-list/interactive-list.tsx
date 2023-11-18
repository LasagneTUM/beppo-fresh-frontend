import { useState } from "react";
import Gallery from "../gallery/gallery";
import styles from "./interactive-list.module.css";

export default function InteractiveList() {
  const [recipes, setRecipes] = useState<unknown[]>([1, 2, 3, 4, 5, 6]);

  return (
    <div className={styles.container}>
      <h1>BBQ Rezepte</h1>
      <p>
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
        eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
        voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet
        clita kasd gubergren
      </p>
      {/* TODO Beppo box */}
      <Gallery recipes={recipes} />
    </div>
  );
}
