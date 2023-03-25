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
    <h3 className={`text-center py-5 ${inView && 'inView'}`} ref={ref}>{props.text}</h3>
  )
}

export default sectionTitle