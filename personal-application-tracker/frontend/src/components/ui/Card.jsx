import React from 'react'

const Card = ({title, icon}) => {
  return (
    /* bg-white/80 adds transparency; backdrop-blur makes it look premium */
    <div className='bg-white/70 backdrop-blur-md p-8 rounded-xl shadow-sm flex flex-col items-center justify-center w-84 h-40 m-10 text-center'>
        <img src={icon} alt={title} className="w-10 h-10 mb-4 opacity-80" />
        <h3 className="font-semibold text-gray-700 text-xl">{title}</h3>
    </div>
  )
}

export default Card