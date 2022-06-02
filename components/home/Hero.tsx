import React from 'react'

const Hero:React.FC = () => {
  return (
    <div className='max-w-7xl mx-auto flex bg-green-400 py-10 lg:py-16 mt-16 items-center font-serif'>
         <div className="left px-10 space-y-5 w-[50%]">
            <h1 className='text-white text-5xl'>Hello Dev</h1>
            <p className='text-xl text-gray-100 font-extrabold'>
                This is a fullstack development blog. 
                <br />
                Where potential developers will be able to write articles and share them with the world, and we will be able to comment on each article.

            </p>
         </div>
         <div className="right w-[50%] text-center">
             <h1 className='text-7xl text-[#e5ff00]'>Fullstack</h1>
         </div>
    </div>
  )
}

export default Hero