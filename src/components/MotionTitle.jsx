import React from 'react'
import { motion } from 'framer-motion'

const MotionTitle = () => {
  return (
    <div>
        <motion.h1
        initial={{opacity:0, scale:0.5}}
        animate={{x:[50,150,0], opacity:1, scale:1}}
        className='font-semibold mb-5 text-3xl'
        >
        Our Menu
        </motion.h1>
    </div>
  )
}

export default MotionTitle