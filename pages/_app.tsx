import '../styles/globals.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import { useEffect } from 'react';
import Layout from '../components/MainLayout/Layout';

function MyApp({ Component, pageProps, ...appProps }: AppProps) {
  useEffect(() => {
    //@ts-ignore
    import("bootstrap/dist/js/bootstrap.bundle");
  }, []);

  if (["/404"].includes(appProps.router.pathname))
    return <Component {...pageProps} />;

  return ( 
  <>
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/logo-white.svg" />
    </Head>
    <Layout>
      <Component {...pageProps} />
    </Layout>
  </>
  );
}

export default MyApp
