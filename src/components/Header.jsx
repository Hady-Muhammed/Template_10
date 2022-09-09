import React, { useState } from 'react'
import {AiOutlineClose , AiOutlineMenu} from 'react-icons/ai';
const Header = () => {
    const [nav , setNav] = useState(false);
    const openCollapse = (e) => {
        setNav(prev => !prev)
    }

  return (
    <>    
    <header className='bg-black flex justify-between items-center mx-auto h-24 px-6 text-white'>
        <h1 className='uppercase text-[#00df9a] text-3xl font-bold'>React.</h1>
        <button className='sm:block lg:hidden text-5xl font-serif' onClick={openCollapse}>
            {
                nav ?  <AiOutlineClose size={20}/> : <AiOutlineMenu size={20}/> 
            }
            </button> 

    <ul className="xs:hidden lg:flex">
            <li className='cursor-pointer p-4 hover:text-gray-400 transition relative after:absolute after:bottom-0 after:left-[41.333333%] after:w-1/4 after:h-[1px] after:bg-[#00df9a]'>Home</li>
            <li className='cursor-pointer p-4 hover:text-gray-400 transition relative after:absolute after:bottom-0 after:left-[41.333333%] after:w-1/4 after:h-[1px] after:bg-[#00df9a]'>Company</li>
            <li className='cursor-pointer p-4 hover:text-gray-400 transition relative after:absolute after:bottom-0 after:left-[41.333333%] after:w-1/4 after:h-[1px] after:bg-[#00df9a]'>Resourses</li>
            <li className='cursor-pointer p-4 hover:text-gray-400 transition relative after:absolute after:bottom-0 after:left-[41.333333%] after:w-1/4 after:h-[1px] after:bg-[#00df9a]'>About</li>
            <li className='cursor-pointer p-4 hover:text-gray-400 transition relative after:absolute after:bottom-0 after:left-[41.333333%] after:w-1/4 after:h-[1px] after:bg-[#00df9a]'>Contact</li>
    </ul>
    </header>
    
    {
        // Conditionally Rendering The Nav Bar According to the Button State
    }
    <nav className={`${nav ? 'left-0' : 'left-[-50%]'} fixed ease-in-out duration-300 h-full top-0 bg-black w-1/2 p-5`}>
        <ul className={`${nav ? 'flex flex-col': ''} text-white p-4`}>
            <h1 className='uppercase text-[#00df9a] text-3xl font-bold'>React.</h1>
            <li className='p-4 border-b border-b-gray-700'>Home</li>
            <li className='p-4 border-b border-b-gray-700'>Company</li>
            <li className='p-4 border-b border-b-gray-700'>Resourses</li>
            <li className='p-4 border-b border-b-gray-700'>About</li>
            <li className='p-4 border-b border-b-gray-700'>Contact</li>
        </ul>
    </nav>
    </>
  )
}

export default Header