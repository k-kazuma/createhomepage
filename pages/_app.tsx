import 'the-new-css-reset/css/reset.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'styles/style.scss';

import type { AppProps } from 'next/app';

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
