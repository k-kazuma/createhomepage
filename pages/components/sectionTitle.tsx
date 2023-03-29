import React from 'react'
import { useInView } from 'react-intersection-observer'

type Props = {
  text: string;
}

function sectionTitle(props: Props) {

    const { ref, inView } = useInView({

        rootMargin: '-100px',
        triggerOnce: true
    })

  return (
    <>
      <h3 className={`sectionTitle text-center py-5 m-0 ${inView && 'inView'}`} ref={ref}>{props.text}</h3>
      <hr className='mb-2' />
    </>
  )
}

export default sectionTitle