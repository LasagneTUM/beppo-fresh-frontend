import { useState } from "react";
import { useOptions } from "../../network/useOptions";
import styles from "./beppo-questions.module.css";

const loadingOption: Option = {
  name: "Loading",
  type: "loading",
  image: "",
};

const loadingOptions: Options = {
  first_option: loadingOption,
  second_option: loadingOption,
};

export function BeppoQuestions() {
  const options = useOptions();
  const [optionIndex, setOptionIndex] = useState(0);
  const { first_option, second_option } = options[optionIndex] || loadingOptions;

  const handleSelection = (n: number) => {
    setOptionIndex(i => i + 1);
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
        <div className={styles.text1}>{first_option.name}</div>
        <div className={styles.text5}>{second_option.name}</div>
      </div>
    </div>
  );
}