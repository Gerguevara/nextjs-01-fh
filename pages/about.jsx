import Link from "next/link";
import { useRouter } from "next/router";
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

//forma alternativa de  retornar una page 
//con multiples layout aunque lo mas facil 
// es hacer un doble wrapper

//para que funcione hay una configuracion en _app.js

AboutPage.getLayout = function getLayout(page) {
  return (
    <MainLayout>
      <DarkLayout>
        {page}
      </DarkLayout>
    </MainLayout>
  );
};
