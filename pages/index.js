import Link from "next/link";
import { MainLayout } from "../layouts/MainLayout";
import styles from '../layouts/MainLayout.module.css'

export default function Home() {
  return (
    <MainLayout>
      <h1 className={styles.title}>
        Welcome to <a href="https://nextjs.org">Next.js!</a>
      </h1>
      <h1 className={styles.title}>
        Go to about <Link href="/about">:D</Link>
      </h1>
      <p className={styles.description}>
        Get started by editing{" "}
        <code className={styles.code}>pages/index.js</code>
      </p>
    </MainLayout>
  );
}
