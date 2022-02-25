import type { AppProps } from 'next/app';
import Head from 'next/head';
import Layout from 'src/components/organisms/Layout';
import Nav from 'src/components/organisms/Nav';
import Providers from 'src/components/organisms/Providers';
import 'styles/index.css';

function App({ Component, pageProps }: AppProps) {
  return (
    <Providers>
      <Head>
        <title>NWordle - words of length N</title>
        <meta name="description" content="NWordle - words of length N" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Nav />

      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Providers>
  );
}

export default App;
