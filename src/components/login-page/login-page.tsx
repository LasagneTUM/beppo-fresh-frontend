import { MouseEventHandler, useState } from "react";
import styles from "./login-page.module.css";


export default function LoginPage() {
  const [username, setUsername] = useState("");

  const handleSubmit: MouseEventHandler<HTMLButtonElement> = (event) => {
    event.preventDefault();
    console.log(username);
  }

  return <div className={styles.loginPage}>
    <form className={styles.loginDialog}>
      <input type="text" onChange={v => setUsername(v.target.value)} />
      <button type="submit" onClick={handleSubmit}>Login</button>
    </form>
  </div>;
}
