import { useNavigate } from "react-router";
import Button from "../button/button";
import styles from "./header.module.css";
import { useUser } from "../../hooks/use-user";
import logo from "./logo.png";
import { Link } from "react-router-dom";
import { IconLogout } from "@tabler/icons-react";

export default function Header() {
  const [, setUser] = useUser();
  const navigate = useNavigate();

  const logout = () => {
    setUser(null);
    navigate("/login");
  };
  return (
    <div className={styles.header}>
      <div className={styles.headerLeft}>
        <Link to="/">
          <img src={logo} alt="HelloFresh Logo" className={styles.logo} />
        </Link>
        <span className={styles.menuItem}>Kochboxen</span>
        <span className={styles.menuItem}>So funktioniert's</span>
        <span className={styles.menuItem}>Rezepte</span>
        <span className={styles.menuItem}>Geschenkgutschein</span>
      </div>
      <Button variant="secondary" onClick={logout} className={styles.logoutBtn}>
        Logout
      </Button>
      <IconLogout onClick={logout} className={styles.logoutIcon} />
    </div>
  );
}
