import { MouseEventHandler, useState } from "react";
import styles from "./login-page.module.css";
import Button from "../button/button";
import { useUser } from "../../hooks/use-user";
import { redirect } from "react-router-dom";

export default function LoginPage() {
  const [username, setUsername] = useState("");
  const [user, setUser] = useUser()

  const handleSubmit: MouseEventHandler<HTMLButtonElement> = (event) => {
    event.preventDefault();
    setUser(username);
  }

  if (user.length) {
    console.log("User is", user);
    redirect("../");
  }

  return <div className={styles.loginPage}>
    <form className={styles.loginDialog}>
      <h2>Login</h2>
      <input type="text" onChange={v => setUsername(v.target.value)} placeholder="Username" />
      <Button type="submit" onClick={handleSubmit}>Login</Button>
    </form>
  </div>;
}
