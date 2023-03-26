import { ReactElement, ReactNode } from 'react';
import { NextPage } from 'next'
import '../styles/globals.css'
import { AppProps } from 'next/app';

//tambien pueden ser JSX.Element en vez de ReactElement

type NextWithLayout = NextPage & {getLayout?: (page:ReactElement)=> ReactNode}

type AppPropsWithLayout = AppProps &{
  Component: NextWithLayout
}



function MyApp({ Component, pageProps }:AppPropsWithLayout ) {

  // configuracion que  hace que tomemos un custon getLayout
  // o una pagina
  const getLayout = Component.getLayout|| ((page) => page)

  // return <Component {...pageProps} />

  return getLayout(<Component {...pageProps} />)
}

export default MyApp
