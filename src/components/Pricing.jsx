import React from 'react'
import single from "../assets/single.png" 
import double from "../assets/double.png" 
import triple from "../assets/triple.png" 
import Card from './Card'
const Pricing = () => {
  return (
    <div className='w-full py-[10rem] px-4'>
        <div className="max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8">
            <Card src = {single} stat='Single' price='$149'/>
            <Card src = {double} stat='Double' price='$100' standout='bg-black text-[#00df9a]'/>
            <Card src = {triple} stat='Triple' price='$275'/>
        </div>
    </div>
  )
}

export default Pricing