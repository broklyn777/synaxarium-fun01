// import { MDXProvider } from '@mdx-js/react'
// import Layout from '@/components/Layout'

import LayoutWrapper from '@/components/LayoutWrapper'
import { ThemeProvider } from 'next-themes'
import Head from 'next/head'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (

    <>
      <ThemeProvider>
        <Head>
          <meta content="width=device-width, initial-scale=1" name="viewport" />
        </Head>


        <LayoutWrapper>
          <Component {...pageProps} />
        </LayoutWrapper>
      </ThemeProvider>
    </>

  )
}

export default MyApp





