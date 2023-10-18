import React, { useState } from 'react'


const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (

    <>
      <div className='font-Lato font-custom6 '>
        <nav className=" pt-3">
          <div className="flex py-3 px-3 lg:!px-10 w-full items-center justify-between text-[#000]">

            <div className="navbar-header flex">
              <a className="navbar-brand" href="/">
                <img className='w-52 lg:w-auto lg:h-[60px]' src="./images/logo.png" alt="error" />
              </a>
            </div>

        <div className=' lg:hidden space-x-4 inline-flex'>
            <div className="hamburger  rounded-md  " onClick={() => setMenuOpen(!menuOpen)}>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 21 21" fill="none">
                <path d="M3.60938 16.0781H17.3906M3.60938 10.8281H17.3906M3.60938 5.57812H17.3906" stroke="gray" stroke-width="1.6" stroke-linecap="round" strokeLinejoin="round" />
              </svg>
              </div>
              <a>Login</a>
              </div>
            <ul className={`hidden lg:flex h-fit !mb-0 `} >
              <li>About</li>
              <li>Pricing</li>
              <li>Contact</li>
              <li>Login</li>
            </ul>
          </div>
        </nav>

        <div className={`lg:hidden ${menuOpen ? 'block' : 'hidden'}`}>
          
          <ul className=' absolute  text-[#000] mt-3 text-center text-base  bg-gray-200 py-3 px-2 right-0 font-custom6 inline-flex w-full justify-end'>
            <li className='px-3'>About</li>
            <li className='px-3'>Pricing</li>
            <li className='px-3'>Contact</li>
          
          </ul>
        </div>
      </div>
    </>
  )
}

export default Navbar