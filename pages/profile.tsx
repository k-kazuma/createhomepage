import React from 'react';
import Header from './components/header';
import Footer from './components/footer';
import SubHeader from './components/subHeader';

import style from 'styles/components/profile.module.scss';
import Motion from './components/motion';

function Profile() {
  const ITEM = [
    {
      th: '屋号',
      td: 'ウェブ制作Monkey',
    },
    {
      th: '代表者',
      td: '熊谷 知馬',
    },
    {
      th: '設立',
      td: '2023.01.04',
    },
    {
      th: '業務',
      td: 'ウェブサイト制作/ウェブアプリ開発',
    },
    {
      th: 'Email',
      td: 'webseisakumonkey@gmail.com',
    },
    {
      th: '住所',
      td: '愛知県名古屋市',
    },
  ];

  return (
    <>
      <Header />
      <Motion>
        <SubHeader text="Profile" />
        <div className={` ${style.profile} container mt-5`}>
          <h2 className={`mt-3`}>プロフィール</h2>
          <hr className="mb-2" />
          <table className={style.table}>
            {ITEM.map((item) => {
              return (
                <thead key={item.td.length} className={style.thead}>
                  <tr className={style.tr}>
                    <th>{item.th}</th>
                    <td>{item.td}</td>
                  </tr>
                </thead>
              );
            })}
          </table>
        </div>
      </Motion>
      <Footer />
    </>
  );
}

export default Profile;
