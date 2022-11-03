import { AppProps } from 'next/app';
import Head from 'next/head';
import '../styles/globals.css';
import '../src/components/HomePage.css';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Bertrand Bourion</title>
        <link rel="shortcut icon" href="/suitcase.png" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700;800;900&amp;display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Original+Surfer&amp;display=swap"
          rel="stylesheet"
        ></link>
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
