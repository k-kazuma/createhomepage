import Head from 'next/head';

import Header from './components/header';
import Main from './components/main';
import Footer from './components/footer';
import Motion from './components/motion';

import style from 'styles/components/home.module.scss';

export default function Home() {
  return (
    <>
      <Head>
        <title>Web制作Monkey</title>
        <meta
          name="description"
          content="名古屋で活動しているフリーランスのフロントエンドエンジニアです。"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta http-equiv="content-language" content="ja" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={style.load}>
        <Header />
        <Motion>
          <Main />
        </Motion>
        <Footer />
      </div>
    </>
  );
}
