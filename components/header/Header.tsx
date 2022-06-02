import Link from 'next/link'
import React from 'react'

const Header = () => {
  return (
    <header className='flex justify-between max-w-7xl mx-auto'>
        <div className="left">
            <Link href={"/"}>
               <h1>Ayoscript Blog</h1>
            </Link>
            <ul className="blog-nav">
                <li>About</li>
                <li>Contact</li>
                <li>Connect</li>
            </ul>
        </div>
        <div className="right">
            <li>Login</li>
            <li>Sign Up</li>
        </div>
    </header>
  )
}

export default Header