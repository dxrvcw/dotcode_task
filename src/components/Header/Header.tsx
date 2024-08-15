import { Link, useLocation } from "react-router-dom";
import styles from "./Header.module.css";

const links = [
  {
    path: "/",
    text: "Interactive desktop",
  },
  {
    path: "/transactions",
    text: "Transactions",
  },
];

export function Header() {
  const { pathname } = useLocation();

  return (
    <header className={styles.header}>
      <ul className={styles.list}>
        {links.map((link) => (
          <li key={link.path}>
            <Link
              to={link.path}
              className={`${styles.linkItem} ${
                pathname === link.path ? styles.active : ""
              }`}
            >
              {link.text}
            </Link>
          </li>
        ))}
      </ul>
    </header>
  );
}
