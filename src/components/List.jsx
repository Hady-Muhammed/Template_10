import React from 'react'

const List = ({head , data}) => {
  return (
  <div className='xs:mt-8 md:mt-0'> 
    <h4 className='font-bold text-xl mb-8 text-gray-400'>{head}</h4>
    <ul className='space-y-4'>
        {data.map((cell,index)=> (
            <li className='cursor-pointer duration-500 hover:text-gray-400' key={index}>{cell}</li>
        ))}
    </ul>
  </div>
  )
}

export default List