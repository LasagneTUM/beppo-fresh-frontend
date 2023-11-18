import { useState } from "react";
import { useOptions } from "../../network/useOptions";
import styles from "./beppo-questions.module.css";
import { Option, Options } from "../../types/options";
import { IconChevronUp } from "@tabler/icons-react";
import classNames from "classnames";

const loadingOption: Option = {
  name: "Loading",
  type: "loading",
  imageLink: "",
};

const loadingOptions: Options[number] = {
  first_option: loadingOption,
  second_option: loadingOption,
};

export type BeppoQuestionsProps = {
  onSelectionDone: (options: Options[number], selectedValue: number) => void;
};

export function BeppoQuestions({ onSelectionDone }: BeppoQuestionsProps) {
  const [expanded, setExpanded] = useState(true);
  const toggleExpanded = () => {
    setExpanded(!expanded);
  };

  const options = useOptions();
  const [optionIndex, setOptionIndex] = useState(0);
  const { first_option, second_option } =
    options[optionIndex] || loadingOptions;

  const handleSelection = (n: number) => {
    setOptionIndex((i) => i + 1);
    onSelectionDone({ first_option, second_option }, n);
  };

  return (
    <div className={styles.beppoQuestions}>
      <div className={styles.container}>
        <div className={styles.headerWrapper}>
          <div className={styles.header}>
            <div className={styles.textSecondary}>
              Help me to find better recommendations :)
            </div>
            <h2 className={styles.question}>What do you prefer?</h2>
          </div>

          <IconChevronUp
            className={classNames(styles.icons, {
              [styles.iconsClosed]: !expanded,
            })}
            onClick={toggleExpanded}
          />
        </div>

        <div className={styles.options}>
          <button onClick={() => handleSelection(1)}>
            <img
              src={first_option.imageLink}
              alt={`Preference: ${first_option.name}`}
            />
          </button>
          <button onClick={() => handleSelection(2)}></button>
          <button onClick={() => handleSelection(3)}></button>
          <button onClick={() => handleSelection(4)}></button>
          <button onClick={() => handleSelection(5)}>
            <img
              src={second_option.imageLink}
              alt={`Preference: ${second_option.name}`}
            />
          </button>
          <span className={styles.textSecondary}>{first_option.name}</span>
          <span
            className={classNames(styles.textSecondary, styles.optionCenterCol)}
          >
            Neutral
          </span>
          <span
            className={classNames(styles.textSecondary, styles.optionLastCol)}
          >
            {second_option.name}
          </span>
        </div>
      </div>
    </div>
  );
}
