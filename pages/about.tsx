import Link from "next/link";
import { useRouter } from "next/router";
import { ReactNode } from "react";
import { DarkLayout } from "../layouts/DarkLayout";
import { MainLayout } from "../layouts/MainLayout";

export default function AboutPage() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { asPath } = useRouter();
  return (
    <>
      <h1 className={"title"}>
        Go to home <Link href="/"> XD</Link>
      </h1>
      <p className={"description"}>
        Get started by editing <code className={"code"}>{asPath}.js</code>
      </p>
    </>
  );
}



AboutPage.getLayout = function getLayout(page: ReactNode) {
  return (
    <MainLayout>
      <DarkLayout>
        {page}
      </DarkLayout>
    </MainLayout>
  );
};
