import React from 'react'

const Newsletter = () => {
  return (
    <div className='text-white p-16 bg-black'>
        <div className="xs:flex-col lg:flex-row container flex justify-between items-center">

        <div>
        <h3 className='font-bold text-3xl mb-3'>Want Tips & Tricks to Optimize your flow?</h3>
        <p>Sign Up to our newsletter and stay up to date.</p>
        </div>
        <div>
            <input type="email" className='text-black outline-none border-none p-3 rounded-md text-xl mr-4 xs:mt-5 lg:mt-0' placeholder='Enter your email' />
            <button className='bg-[#00df9a] px-12 hover:opacity-70 transition duration-150 text-black py-3 rounded-md text-xl mt-5'>Notify me</button>
            <p className='mt-5'>We care about the protection of your data. Read our <br /> <a href="" className='underline text-[#00df9a]'>Privacy Policy</a></p>
        </div>
        </div>
    </div>
  )
}

export default Newsletter