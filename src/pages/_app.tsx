import type { AppProps } from 'next/app';

import { UserProvider } from '../context/Auth/context';
import '../styles/global.css';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <UserProvider>
      <Component {...pageProps} />
    </UserProvider>
  );
}
