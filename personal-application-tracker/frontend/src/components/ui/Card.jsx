import React from 'react'

const Card = ({ title, icon, info }) => {
  return (
    /* Container provides the 3D space */
    <div className="group [perspective:1000px] w-84 h-48 m-10">
      
      <div className="relative w-full h-full transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
        
        {/* FRONT SIDE (Icon & Title) */}
        <div className="absolute inset-0 [backface-visibility:hidden] bg-white/70 backdrop-blur-md p-8 rounded-xl shadow-sm flex flex-col items-center justify-center text-center">
          <img src={icon} alt={title} className="w-12 h-12 mb-4 opacity-80" />
          <h3 className="font-semibold text-gray-700 text-xl">{title}</h3>
        </div>

        {/* BACK SIDE (Information) */}
        <div className="absolute inset-0 [backface-visibility:hidden] [transform:rotateY(180deg)]  backdrop-blur-lg p-6 rounded-xl shadow-xl flex items-center justify-center text-center text-white [background-image:linear-gradient(135deg,#3428c5,#005fe2,#0084e8,#00a4e2,#43c0da)]">
          <div>
            <h4 className="font-bold mb-2 text-lg">{title}</h4>
            <p className="text-sm opacity-90">{info}</p>
          </div>
        </div>
        
      </div>
    </div>
  )
}

export default Card