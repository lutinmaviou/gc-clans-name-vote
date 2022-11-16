import { AppProps } from 'next/app';
import Head from 'next/head';
import '../styles/globals.css';
import '../src/components/HomePage.css';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Bertrand Bourion</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
