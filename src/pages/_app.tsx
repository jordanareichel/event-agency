import type { AppProps } from 'next/app';
import Head from 'next/head';

import { UserProvider } from '../context/Auth/context';
import '../styles/global.css';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <UserProvider>
      <Head>
        <title>Agência de Eventos</title>
      </Head>
      <Component {...pageProps} />
    </UserProvider>
  );
}
