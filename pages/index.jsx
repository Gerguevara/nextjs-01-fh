import Link from "next/link";
import { MainLayout } from "../layouts/MainLayout";

export default function Home() {
  return (
    <MainLayout>
      <h1 className={'title'}>
        Welcome to <a href="https://nextjs.org">Next.js!</a>
      </h1>
      <h1 className={'title'}>
        Go to about <Link href="/about">:D</Link>
      </h1>
      <p className={'description'}>
        Get started by editing{" "}
        <code className={'code'}>pages/index.js</code>
      </p>
    </MainLayout>
  );
}
