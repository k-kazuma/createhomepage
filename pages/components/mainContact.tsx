import React from 'react';
import Link from 'next/link';
import SectionTitle from './sectionTitle';
import { useInView } from 'react-intersection-observer';

import style from 'styles/components/mainContact.module.scss';

function MainContact() {
  const { ref, inView } = useInView({
    rootMargin: '-100px',
    triggerOnce: true,
  });
  return (
    <div className={`row`}>
      <div className={`container text-center`}>
        <SectionTitle text="お問い合わせ" />
        <div className={` ${style.contact} ${inView && style.inView} mt-5`} ref={ref}>
          <p>制作のご依頼ご相談はメールもしくは問い合わせフォームからお問い合わせください</p>
          <div className={`py-5`}>
            <h3>
              <a href="mailto:address">webseisakumonkey@gmail.com</a>
            </h3>
            <button className={`d-block mx-auto mt-5 btn btn-danger`}>
              <Link href={'/contact'} className={`text-light text-decoration-none`}>
                問い合わせフォームはこちら
              </Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainContact;
