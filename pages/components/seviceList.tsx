import React from 'react'
import { useInView } from 'react-intersection-observer'

type Props = {
    title:string;
    text: string;
  }

function seviceList(props:Props) {

    const { ref, inView } = useInView({

        rootMargin: '-100px',
        triggerOnce: true
    })

  return (
    <div className={`text-center pt-5 ${inView && 'inView'}`} ref={ref}>
        <h6>{props.title}</h6>
        <div className="d-md-flex pt-3 justify-content-center">
            <div className="serviceImg mx-auto mx-md-0"></div>
            <p className='col-md-4 pt-3 ms-md-5'>
                {props.text}
            </p>
        </div>
    </div>
  )
}

export default seviceList