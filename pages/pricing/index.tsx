import React from 'react'
import { MainLayout } from '../../layouts/MainLayout'
import { DarkLayout } from "../../layouts/DarkLayout";
import Link from 'next/link';
import { useRouter } from 'next/router';

const pricing = () => {

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { asPath } = useRouter();
  return (
    <MainLayout>
      <DarkLayout>
      <h1 className={'title'}>
        Go to home <Link href="/"> XD</Link>
      </h1>
      <p className={'Pricing'}>
        Get started by editing <code className={'code'}>{asPath}.js</code>
      </p>
      </DarkLayout>
    </MainLayout>
  )
}

export default pricing