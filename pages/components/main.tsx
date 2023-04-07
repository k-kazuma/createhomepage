import React from 'react';
import style from 'styles/components/main.module.scss';

import SectionTitle from './sectionTitle';
import ServiceList from './seviceList';
import MainContact from './mainContact';
import Box from '../components/box';

function Main() {
  const ITEM = [
    {
      title: 'ウェブサイト制作',
      text: 'ホームページ、ランディングページ、コーポレートサイトなどの制作を承っております。UIの設計にこだわって操作性の高いWEBサイトの制作を心がけております。',
      img: 'homepage.jpg',
    },
    {
      title: 'ウェブアプリ開発',
      text: 'Webブラウザを使用したアプリケーションの開発のご依頼を承っております。また私自身のサービスとしてウェブアプリの開発もしておりますのでご活用ください。',
      img: 'application.jpg',
    },
  ];

  return (
    <>
      <main className={style.main}>
        <div className={`row`}>
          <div className="container">
            <div className={`${style.heroImg} mx-auto d-flex align-items-center`}>
              <div className={`${style.title} mx-auto text-center title`}>
                <h1>Web制作Monkey</h1>
                <p>ウェブサイト制作／ウェブアプリ開発</p>
              </div>
              <Box />
            </div>
          </div>
        </div>

        <section className={`${style.section} mt-5`}>
          <div className={`row`}>
            <div className={`container service`}>
              <SectionTitle text="サービス" />
              {ITEM.map((item) => {
                return (
                  <ServiceList title={item.title} text={item.text} img={item.img} key={item.img} />
                );
              })}
            </div>
          </div>
        </section>
        <section className={style.section}>
          <div className={`row`}>
            <div className={`container text-center`}>
              <SectionTitle text="お問い合わせ" />
              <MainContact />
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default Main;
