import React from 'react';
import Typed from 'react-typed';

const Landing = () => {
  return (
    <div className='grid place-items-center text-center h-screen text-white bg-black'>
        <div className='max-w-[800px] mt-[-96px]  mx-auto'>
            <p className="text-[#00df9a] font-bold p-2">GROWING WITH DATA ANALYTICS</p>
            <h1 className='md:text-7xl sm:text-6xl text-4xl font-bold md:py-6'>Grow with data</h1>
            <div>
                <p className='md:text-5xl sm:text-4xl text-xl font-bold'>Fast , flexiable financing for
                <span className='inline-block ml-4'>
                <Typed strings={['BTB' , 'BTC', 'SAAS']} typeSpeed={120} backSpeed={140} loop/>
                </span>
                </p>
            </div>
            <p className='md:text-2xl text-xl font-semibold text-gray-500 mt-10 '>Monitor your data analytics to increase revenue for BTB  , BTC & SAAS Platforms.</p>
            <button className='bg-[#00df9a] px-12 hover:opacity-70 transition duration-150 text-black py-5 rounded-md text-xl mt-10'>Get Started</button>
        </div>  
    </div>
  )
}

export default Landing;