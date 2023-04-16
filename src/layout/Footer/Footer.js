import { Button } from "@/components";
import styles from "./Footer.module.css";
import Link from "next/link";

const Footer = ({ ...props }) => {
  return (
    <footer {...props}>
      <div className={styles.btn}>
        <Button>Join Newsletter</Button>
      </div>
      <ul className={styles.nav}>
        <li>
          <Link href="/" className={styles.nav__link}>
            Discord
          </Link>
        </li>
        <li>
          <Link href="/" className={styles.nav__link}>
            Twitter
          </Link>
        </li>
        <li>
          <Link href="/" className={styles.nav__link}>
            Contact Us
          </Link>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;