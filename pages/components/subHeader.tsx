import React from 'react'

import style from 'styles/components/subHeader.module.scss'

type Props = {text:String}

function SubHeader(props:Props) {
  return (
    <div  className={`${style.hero}`}>
        <div className={`container`}>
        <h2>{props.text}</h2>
        </div>
    </div>
  )
}

export default SubHeader