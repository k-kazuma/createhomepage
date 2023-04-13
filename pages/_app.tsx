import 'the-new-css-reset/css/reset.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'styles/style.scss';

import type { AppProps } from 'next/app';
import { useEffect, useState } from 'react';
import Load from './components/load';

export default function App({ Component, pageProps }: AppProps) {
  const [load, setLoad] = useState<boolean>(false);

  useEffect(() => {
    setTimeout(() => {
      setLoad(true);
    }, 4000);
  });

  return !load ? <Load load={load} /> : <Component {...pageProps} load={load} setLoad={setLoad} />;
}
