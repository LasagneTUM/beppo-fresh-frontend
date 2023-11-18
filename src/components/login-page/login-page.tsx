import { MouseEventHandler, useState } from "react";
import styles from "./login-page.module.css";
import Button from "../button/button";


export default function LoginPage() {
  const [username, setUsername] = useState("");

  const handleSubmit: MouseEventHandler<HTMLButtonElement> = (event) => {
    event.preventDefault();
    
    
  }

  return <div className={styles.loginPage}>
    <form className={styles.loginDialog}>
      <h2>Login</h2>
      <input type="text" onChange={v => setUsername(v.target.value)} placeholder="Username" />
      <Button type="submit" onClick={handleSubmit}>Login</Button>
    </form>
  </div>;
}
