import { AppProps } from 'next/app';
import Head from 'next/head';
import '../styles/globals.css';
import '../src/components/HomePage.css';
import '../pages/auth/signin.css';
import { SessionProvider } from 'next-auth/react';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Team France 974</title>
      </Head>
      <SessionProvider session={pageProps.session}>
        <Component {...pageProps} />
      </SessionProvider>
    </>
  );
}

export default MyApp;
