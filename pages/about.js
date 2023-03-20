import Head from 'next/head'
import Link from 'next/link'
import { Navbar } from '../components/Navbar'
import { useRouter } from 'next/router'
import styles from '../styles/Home.module.css'

export default function Home() {

   // eslint-disable-next-line react-hooks/rules-of-hooks
   const {asPath} = useRouter();

  return (
    <div className={styles.container}>
      <Head>
        <title>You are in About Page</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar/>
      <main className={styles.main}>
        <h1 className={styles.title}>
         Go to home <Link href="/"> XD</Link>
        </h1>
        <p className={styles.description}>
          Get started by editing{' '}
          <code className={styles.code}>{ asPath}.js</code>
        </p>
      </main>
    </div>
  )
}