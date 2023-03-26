import Link from "next/link";
import { useRouter } from "next/router";
import { MainLayout } from "../layouts/MainLayout";
import styles from '../layouts/MainLayout.module.css'

export default function Home() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { asPath } = useRouter();

  return (
    <MainLayout>
      <h1 className={styles.title}>
        Go to home <Link href="/"> XD</Link>
      </h1>
      <p className={styles.description}>
        Get started by editing <code className={styles.code}>{asPath}.js</code>
      </p>
    </MainLayout>
  );
}
