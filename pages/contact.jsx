import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { MainLayout } from "../layouts/MainLayout";


const ContactPage = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { asPath } = useRouter();

  return (
    <MainLayout>
      <h1 className={'title'}>
        Go to home <Link href="/"> XD</Link>
      </h1>
      <p className={'description'}>
        Get started by editing <code className={'code'}>{asPath}.js</code>
      </p>
    </MainLayout>
  );
};

export default ContactPage;
