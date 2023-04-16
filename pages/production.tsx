import React from 'react';
import Header from './components/header';
import Motion from './components/motion';
import SubHeader from './components/subHeader';
import Footer from './components/footer';

import style from 'styles/components/production.module.scss';
import ProductionList from './components/productionList';
import Price from './components/price';

function Production() {
  const ITEM = [
    {
      num: '01',
      title: 'お問い合わせ・概算見積もり',
      text: 'お問い合わせ頂いた後メールもしくは電話にて簡単な要望をお伺いして、概算見積もりをお伝えいたします。',
      img: 'estimate.jpg',
    },
    {
      num: '02',
      title: 'コーディング',
      text: '頂いたデザインをもとにブラウザ上でウェブサイトとして動作するように、コーディング・プログラミングいたします。',
      img: 'application.jpg',
    },
    {
      num: '03',
      title: 'テスト公開',
      text: 'パスワード付きでウェブ上に仮公開します。実際のサイトを見ていただき簡単な修正を行います。',
      img: 'test.jpg',
    },
    {
      num: '04',
      title: '納品',
      text: '修正が完了しましたら、サーバーへアップロードいたします。正常に動作していることを確認していただき納品完了になります。',
      img: 'release.jpg',
    },
  ];
  return (
    <>
      <Header />
      <Motion>
        <SubHeader text="Production" />
        <div className={`${style.production} container mt-5`}>
          <h2 className={`mt-3`}>制作の流れ</h2>
          <hr className="mb-2" />
          <div>
            {ITEM.map((item) => {
              return (
                <ProductionList
                  num={item.num}
                  title={item.title}
                  text={item.text}
                  img={item.img}
                  key={item.text.length}
                />
              );
            })}
          </div>
          <h2 className={`mt-3`}>料金</h2>
          <hr className="mb-2" />
          <div>
            <div className={style.priceText}>
              <p>
                ご依頼の内容によって料金は異なりますのでお問い合わせ後に見積もりを提示させていただきますのでまずはご相談をお願いいたします。
              </p>
            </div>
            <Price />
          </div>
        </div>
      </Motion>
      <Footer />
    </>
  );
}

export default Production;
