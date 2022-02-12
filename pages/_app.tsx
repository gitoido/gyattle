import type { AppProps } from 'next/app';
import Layout from 'src/components/organisms/Layout';
import Providers from 'src/components/organisms/Providers';
import 'styles/index.css';

function App({ Component, pageProps }: AppProps) {
  return (
    <Providers>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Providers>
  );
}

export default App;
