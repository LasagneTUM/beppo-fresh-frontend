import { Outlet } from "react-router-dom";
import styles from "./layout.module.css";
import Header from "../header/header";
import Footer from "../footer/footer";

export default function Layout() {
  return (
    <div className={styles.layoutContainer}>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}
