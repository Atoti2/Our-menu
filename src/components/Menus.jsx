import React from 'react';
import { data } from '../data';
import MenuCard from './MenuCard';
const Menus = ({ selected }) => {
  const filteredMenus = data.filter((item) => item.category.toLowerCase() === selected.toLowerCase());

  return (
    <>
        <h1 className='text-center my-6 text-2xl font-semibold font-mono text-slate-200'>{selected.charAt(0).toUpperCase() + selected.slice(1)}</h1>
        <div className="p-5 flex flex-wrap gap-8 items-center justify-center">
            
        {filteredMenus.length === 0 || selected == "All" ? (
            data.map((item) => (
            <MenuCard key={item.id} item={item} />
            ))
        ) : (
            filteredMenus.map((item) => (
            <MenuCard key={item.id} item={item} />
            ))
        )}
        </div>
    </>
  );
};


export default Menus;