import styles from "./beppo-questions.module.css";

export function BeppoQuestions() {
  return (
    <div className={styles.beppoQuestions}>
      <div className={styles.speechBubble}>
        <div className={styles.preQuestion}>Help me to find better recommendations :)</div>
        <h2>What do you like more?</h2>
        <div>x</div>
        <div>
          <button>1</button>
          <button>2</button>
          <button>3</button>
          <button>4</button>
          <button>5</button>
        </div>
        <div>Text 1</div>
        <div>Text 5</div>
      </div>
    </div>
  );
}