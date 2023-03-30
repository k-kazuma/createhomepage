import React from 'react'
import style from 'styles/components/serviceList.module.scss'
import { useInView } from 'react-intersection-observer'

type Props = {
    title:string;
    text: string;
    img: string;
  }

function SeviceList(props:Props) {

    const { ref, inView } = useInView({

        rootMargin: '-100px',
        triggerOnce: true
    })

  return (
    <div className={` ${style.service} ${inView && style.inView} text-center py-2 my-5`} ref={ref}>
        <h4>{props.title}</h4>
        <div className={`d-md-flex pt-3 justify-content-center`}>
            <img src={props.img} alt="イメージ画像" className={`${style.serviceImage} mx-auto mx-md-0`}/>
            <p className={`col-md-4 pt-3 ms-md-5`}>
                {props.text}
            </p>
        </div>
    </div>
  )
}

export default SeviceList