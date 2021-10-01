import '../styles/globals.css'
import { FC } from 'react'
import type { AppProps } from 'next/app'
import Head from 'next/head'

const MyApp: FC<AppProps> = ({ Component, pageProps}: AppProps) => {
  <Head>
    <title>My app</title>
    <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
  </Head>;

  // eslint-disable-next-line react/jsx-props-no-spreading
  return <Component {...pageProps} />;
}
export default MyApp
