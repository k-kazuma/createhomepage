import React from 'react';
import style from 'styles/components/main.module.scss';

import SectionTitle from './sectionTitle';
import MainContact from './mainContact';
import Box from '../components/box';
import MainService from './mainService';

function Main() {
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
          <MainService />
        </section>
        <section className={style.section}>
          <MainContact />
        </section>
      </main>
    </>
  );
}

export default Main;
