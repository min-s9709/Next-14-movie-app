"use client";

import Link from "next/link";
import styles from "../styles/Movie-menu-tab.module.css";
import { usePathname } from "next/navigation";

export default function MovieMenuTab({ id }: { id: string }) {
  const path = usePathname();

  return (
    <nav className={styles.nav}>
      <ul>
        <li className={path === `/movies/${id}` ? styles.active : ""}>
          <Link href={`/movies/${id}`}>VIDEOS</Link>
        </li>
        <li className={path === `/movies/${id}/credits` ? styles.active : ""}>
          <Link href={`/movies/${id}/credits`}>CREDITS</Link>
        </li>
        <li className={path === `/movies/${id}/similar` ? styles.active : ""}>
          <Link href={`/movies/${id}/similar`}>SIMILAR</Link>
        </li>
      </ul>
    </nav>
  );
}
