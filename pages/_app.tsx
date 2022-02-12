import type { AppProps } from 'next/app';
import Layout from 'src/components/organisms/Layout';
import 'styles/index.css';

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default App;
