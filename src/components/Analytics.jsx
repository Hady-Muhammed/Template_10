import React from 'react'
import anal from '../assets/anal.png'
const Analytics = () => {
  return (
    <div className='flex mt-10 max-w-[1280px] mx-auto xs:flex-col items-center lg:flex-row px-16 py-10'>
        <div><img src={anal} alt="anal" /></div>
        <div>
        <h2 className='text-[#00df9a] font-bold'>DATA ANALYTICS DASHBOARD</h2>
        <p className='md:text-7xl sm:text-6xl text-4xl font-bold my-5'>Manage Data Analytics Centrally</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur suscipit aliquam voluptate explicabo ex perspiciatis distinctio quia ipsa enim delectus sequi accusantium unde dolores, iste laudantium impedit asperiores. Iure, ipsam!</p>
        <button className='bg-black px-12 hover:opacity-70 transition duration-150 text-[#00df9a] py-5 rounded-md text-xl mt-10'>Get Started</button>
        </div>
    </div>
  )
}

export default Analytics