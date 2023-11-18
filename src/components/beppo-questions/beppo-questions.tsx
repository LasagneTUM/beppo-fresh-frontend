import { useState } from "react";
import { useOptions } from "../../network/useOptions";
import styles from "./beppo-questions.module.css";

export function BeppoQuestions() {
  const options = useOptions();
  const [optionIndex, setOptionIndex] = useState(0);
  const [option1, option5] = options[optionIndex] || ["Loading...", "Loading..."];

  const handleSelection = (n: number) => {
    setOptionIndex(i => i+1);
  };

  return (
    <div className={styles.beppoQuestions}>
      <div className={styles.speechBubble}>
        <div className={styles.x}>x</div>
        <div className={styles.preQuestion}>Help me to find better recommendations :)</div>
        <h2 className={styles.question}>What do you like more?</h2>
        <div className={styles.buttons}>
          <button onClick={() => handleSelection(1)}>1</button>
          <button onClick={() => handleSelection(2)}>2</button>
          <button onClick={() => handleSelection(3)}>3</button>
          <button onClick={() => handleSelection(4)}>4</button>
          <button onClick={() => handleSelection(5)}>5</button>
        </div>
        <div className={styles.text1}>{option1}</div>
        <div className={styles.text5}>{option5}</div>
      </div>
    </div>
  );
}