import Link from "next/link";
import styles from "../../styles/Nav.moudule.css";

export default function Nav(){
  return (
    <nav className={styles.nav}>
      <ul>
        <li className={styles.li}> <Link href='/'>Home</Link> </li>
        <li className={styles.li}> <Link href='/counter/Counter'>counter</Link> </li>


      </ul>
    </nav>
  );
};
