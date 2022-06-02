import Link from 'next/link'
import React from 'react'

const Header = () => {
  return (
    <header className='flex justify-between max-w-7xl mx-auto items-center p-9'>
        <div className="left flex items-center  space-x-6 ">
            <Link href={"/"} passHref>
                <a className='flex space-x-2 items-center p-2'>
                  <img src="/assets/icons8-full-stack-64.png" alt="img" width={30} height={30}/> 
                  <span>Ayoscript Blog</span>
                </a>
            </Link>
            <ul className="blog-nav sm:flex space-x-3 items-center hidden">
                <h3 className='px-2  rounded-lg '>About</h3>
                <h3 className='px-2  rounded-lg '>Contact</h3>
                <h3 className='p-2 bg-green-400 text-white rounded-lg '>Connect</h3>
            </ul>
        </div>
        <div className="flex  space-x-3 items-center">
            <h3>Login</h3>
            <h3 className='p-3 bg-green-400 text-white rounded-lg '>Sign Up</h3>
        </div>
    </header>
  )
}

export default Header