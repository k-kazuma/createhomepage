import React from 'react';
import { useInView } from 'react-intersection-observer';
import style from 'styles/components/productionList.module.scss';

type Props = {
  num: string;
  title: string;
  text: string;
  img: string;
};
function ProductionList(props: Props) {
  const { ref, inView } = useInView({
    rootMargin: '-150px',
    triggerOnce: true,
  });

  return (
    <div className={` ${style.production} ${inView && style.inView}`} ref={ref}>
      <h4 className={style.headline}>
        <span className={style.number}>{props.num}</span>
        {props.title}
      </h4>
      <div className={`d-md-flex pt-3 justify-content-center align-items-center`}>
        <img
          src={props.img}
          alt="イメージ画像"
          className={`${style.productionImage} mx-auto mx-md-0`}
        />
        <p className={`col-md-4 pt-3 pt-md-0 ms-md-5`}>{props.text}</p>
      </div>
      <hr />
      <div className={style.arrow}></div>
    </div>
  );
}

export default ProductionList;
