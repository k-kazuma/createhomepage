import React from 'react';
import SectionTitle from './sectionTitle';
import ServiceList from './serviceList';

import style from 'styles/components/mainService.module.scss';
import { useInView } from 'react-intersection-observer';

function MainService() {
  const { ref, inView } = useInView({
    rootMargin: '-100px',
    triggerOnce: true,
  });

  const ITEM = [
    {
      title: 'ウェブサイト制作',
      text: 'ホームページ、ランディングページ、コーポレートサイトなどのコーディングからデプロイまでのご依頼を承っています。',
      img: 'homepage.jpg',
    },
    {
      title: 'ウェブアプリ開発',
      text: 'Webアプリケーション開発におけるフロントエンドのコーディングのご依頼を承っております。',
      img: 'application.jpg',
    },
  ];
  return (
    <div className={`row`}>
      <div className={`container service`}>
        <SectionTitle text="サービス" />
        <div className={`${style.serviceText} ${inView && style.inView}`} ref={ref}>
          <p>web制作、アプリ開発におけるコーディングのご依頼を承っています。</p>
          <p>
            デザインはお客様持ち込みにてご依頼を承っておりますが、デザインからデプロイまでまとめてご依頼をご希望の際はご相談ください。
          </p>
        </div>
        {ITEM.map((item) => {
          return <ServiceList title={item.title} text={item.text} img={item.img} key={item.img} />;
        })}
      </div>
    </div>
  );
}

export default MainService;
