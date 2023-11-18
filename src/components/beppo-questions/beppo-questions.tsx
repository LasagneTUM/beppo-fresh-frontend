import styles from "./beppo-questions.module.css";

export function BeppoQuestions() {
  return (
    <div className={styles.beppoQuestions}>
      <div className={styles.speechBubble}>
        <div className={styles.x}>x</div>
        <div className={styles.preQuestion}>Help me to find better recommendations :)</div>
        <h2 className={styles.question}>What do you like more?</h2>
        <div className={styles.buttons}>
          <button>1</button>
          <button>2</button>
          <button>3</button>
          <button>4</button>
          <button>5</button>
        </div>
        <div className={styles.text1}>Text 1</div>
        <div className={styles.text5}>Text 5</div>
      </div>
    </div>
  );
}