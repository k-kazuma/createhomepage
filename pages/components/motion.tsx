import React from 'react'
import {motion} from 'framer-motion'


function Motion({children}: {children: React.ReactNode}) {


  return (
    <motion.div
    initial={{opacity:0}}
    animate={{opacity:1}}
    transition={{duration: 2}}
    >
    {children}
    </motion.div>
  )
}

export default Motion