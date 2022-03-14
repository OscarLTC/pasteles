import '../styles/globals.css';
import '../styles/form.css'
import type { AppProps } from 'next/app';
import { Layout } from './layout/layout';
import 'bootstrap/dist/css/bootstrap.min.css';
import { RecoilRoot } from 'recoil';

function MyApp({ Component, pageProps }: AppProps) {
  return <RecoilRoot>
  <Layout>
      <Component {...pageProps} />
  </Layout>
  </RecoilRoot>
}

export default MyApp
