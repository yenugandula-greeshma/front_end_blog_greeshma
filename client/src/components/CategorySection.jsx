
import React from 'react'

const categorySection = ({onSelectCategory,activeCategory}) => {
    const categories=["Startups","Security","AI","Apps","Tech"];
  return (
    <div className='px-4 mb-8 lg:space-x-16 flex flex-wrap items-center border-b-2 py-5 text-gray-900 font-bold'>
        <button onClick={()=>onSelectCategory(null)} className={` gap-1 lg:ml-12 ${activeCategory ? "":"active-button"}`}>All</button>
        {
            categories.map((category)=>(
                <button key={category}
                onClick={()=>onSelectCategory(category)}
                className={`mr-2 space-x-16 ${activeCategory===category?"active-button":""}`}>{category}</button>
            ))
        }
    </div>
  )
}

export default categorySection
