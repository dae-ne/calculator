import '../styles.css';
import type { AppProps } from 'next/app';
// TODO: decimals
const MyApp = ({ Component, pageProps }: AppProps) => {
  return <Component {...pageProps} />;
};

export default MyApp;
