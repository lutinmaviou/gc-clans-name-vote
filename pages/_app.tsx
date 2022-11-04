import { AppProps } from 'next/app';
import Head from 'next/head';
import '../styles/globals.css';
import '../src/components/HomePage.css';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Bertrand Bourion</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
