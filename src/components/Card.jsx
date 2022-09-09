import React from 'react'

const Card = ({src ,stat ,price ,standout}) => {
  return (
    <div className={`w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-[1.05] duration-300 ${standout ? "translate-y-10" : ""}`}>
        <img className='w-20 mx-auto mt-[-3rem] bg-white' src={src} alt="s" />
        <h2 className='text-2xl font-bold text-center py-8'>{stat} User</h2>
        <p className='text-center text-4xl font-bold'>{price}</p>
        <div className='text-center font-medium'>
            <p className='py-2 border-b mx-8 mt-8'>500 GB Storage</p>
            <p className='py-2 border-b mx-8 mt-8'>1 Granted User</p>
            <p className='py-2 border-b mx-8 mt-8'>Send Up to 2 GB</p>
        </div>
        {
           standout ? 
    (<button className='bg-black text-[#00df9a] px-12 hover:opacity-70 transition duration-150 py-5 rounded-md text-xl mt-10'> Start Trial</button>)
:
    (<button className='bg-[#00df9a] px-12 hover:opacity-70 transition duration-150 text-black py-5 rounded-md text-xl mt-10'> Start Trial</button>)
    
        }
    </div>
  )
}

export default Card