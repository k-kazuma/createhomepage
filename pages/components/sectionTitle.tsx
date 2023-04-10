import React from 'react';
import style from 'styles/components/sectionTitle.module.scss';
import { useInView } from 'react-intersection-observer';

type Props = {
  text: string;
};

function SectionTitle(props: Props) {
  const { ref, inView } = useInView({
    rootMargin: '-100px',
    triggerOnce: true,
  });

  return (
    <>
      <h3
        className={`${style.sectionTitle} ${inView && style.inView} text-center py-5 m-0`}
        ref={ref}
      >
        {props.text}
      </h3>
      <hr className="mb-2" />
    </>
  );
}

export default SectionTitle;
