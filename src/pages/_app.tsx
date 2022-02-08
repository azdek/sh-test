import { Provider } from 'react-redux'
import Head from 'next/head'
import type { AppProps } from 'next/app'
import { Container } from '@mui/material'
import { store } from 'store'
import 'styles/globals.css'
import Link from 'next/link'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Container maxWidth="xl">
      <Provider store={store}>
        <Head>
          <title>Star Wars Figures</title>
          <meta name="description" content="Find the latest products for the biggest fans of the iconic saga." />
          <link rel="icon" href="/favicon.svg" />
          <link rel="apple-touch-icon" href="/webclip.svg"/>
          <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Rubik:wght@700&family=Spartan:wght@500;700&display=swap"
            rel="stylesheet"
          />
        </Head>
        <Link href="/" passHref>
          <a>
            <img className="logo" src="/assets/logo.svg" alt="StarWars Logo" />
          </a>
        </Link>
        <Component {...pageProps} />
      </Provider>
    </Container>
  )
}

export default MyApp
