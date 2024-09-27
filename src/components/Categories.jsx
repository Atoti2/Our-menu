import React, { useEffect, useState } from 'react'
import { data } from '../data'

const Categories = ({selected, setSelected}) => {
    const [category, setCategory] = useState([])   

    useEffect(() => {
        const uniqueCategories = [...new Set(data.map(item => item.category))]
        setCategory([...uniqueCategories, "all"])
      }, [])

  return (
    <div className='gap-5 flex flex-wrap sm:justify-normal justify-center'>
        {category.map((categ) => {
            
            return( 
                <button onClick={() => setSelected(categ)} key={categ} 
                className={selected === categ ? "bg-blue-500 btn hover:bg-blue-500 border-none font-bold text-slate-100 text-xl" : "bg-slate-800 btn hover:bg-slate-800 border-none font-bold text-slate-100 text-xl"}>
                {categ.charAt(0).toUpperCase() + categ.slice(1)}</button>
            )
        })}
    </div>
  )
}

export default Categories