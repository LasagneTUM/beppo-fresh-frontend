// import { useNavigate } from "react-router";
import Button from "../button/button";
import styles from "./header.module.css";
import { useUser } from "../../hooks/use-user";

export default function Header() {
  const [user, setUser] = useUser();

  const logout = () => {
    setUser(null);
    // navigate("/login");
  };
  return (
    <div className={styles.header}>
      <Button variant="secondary" onClick={logout} className={styles.logoutBtn}>
        Logout
      </Button>
    </div>
  );
}
