"use client"
import { mainContext } from '@/models'
import React,{useContext} from 'react'


function ProfilePageRightColors() {
  const {setColor} = useContext(mainContext)
  return (
    <div className='ProfilePageBackgroundChange my-6'>
        <p className='w-full h-12 font-semibold flex items-center justify-center text-white text-xl'>Change Background Color</p>
        <div className='w-full h-4/6 flex justify-center items-start flex-wrap '>
            <div  onClick={()=>{setColor("linear-gradient(108.4deg, rgb(253, 44, 56) 3.3%, rgb(176, 2, 12) 98.4%)")}} className=' background1 w-16 h-16  hover:scale-110 duration-200 cursor-pointer  rounded-sm m-2'>

            </div>

            <div onClick={()=>{setColor("radial-gradient(circle at -0.8% 4.3%, rgb(59, 176, 255) 0%, rgb(76, 222, 250) 83.6%)")}}  className=' background2 w-16 h-16 hover:scale-110 duration-200 cursor-pointer rounded-sm  m-2'>

            </div>

            <div onClick={()=>{setColor("linear-gradient(102.7deg, rgb(253, 218, 255) 8.2%, rgb(223, 173, 252) 19.6%, rgb(173, 205, 252) 36.8%, rgb(173, 252, 244) 73.2%, rgb(202, 248, 208) 90.9%)")}}  className=' background3 w-16 h-16 hover:scale-110 duration-200 cursor-pointer  rounded-sm m-2'>

            </div>

            <div  onClick={()=>{setColor("radial-gradient(circle at 3.1% 8.2%, rgb(248, 250, 107) 0%, rgb(238, 148, 148) 98.2%)")}} className=' background4 w-16 h-16 hover:scale-110 duration-200 cursor-pointer rounded-sm  m-2'>

            </div>

            <div onClick={()=>{setColor("linear-gradient(178.6deg, rgb(20, 36, 50) 11.8%, rgb(124, 143, 161) 83.8%)")}}  className=' background5 w-16 h-16 hover:scale-110 duration-200 cursor-pointer  rounded-sm m-2'>

            </div>
        </div>
    </div>
  )
}

export default ProfilePageRightColors