import '../styles/globals.css'

function MyApp({ Component, pageProps }) {

  // configuracion que  hace que tomemos un custon getLayout
  // o una pagina
  const getLayout = Component.getLayout|| ((page) => page)

  // return <Component {...pageProps} />

  return getLayout(<Component {...pageProps} />)
}

export default MyApp
