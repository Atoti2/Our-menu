import React from 'react'
import MotionTitle from './MotionTitle'
import Categories from './Categories'

const StickyHeader = ({selected, setSelected}) => {
  return (
    
    <div className='flex  justify-center p-5 flex-col items-center bg-slate-100 text-slate-900 m-3 rounded-lg'>
        <MotionTitle/>
        <Categories selected={selected} setSelected={setSelected}/>
    </div>
  )
}

export default StickyHeader