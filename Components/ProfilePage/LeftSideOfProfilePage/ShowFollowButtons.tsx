"use client"
import { mainContext } from '@/models'
import React,{useContext} from 'react'

function ShowFollowButtons() {
    const {setShowFollows} = useContext(mainContext)
    const {setShowFollowers} = useContext(mainContext)
  return (
    <div className='w-full flex justify-between items-center px-3 h-10'>
        <div onClick={()=>{setShowFollows(true)}} className='w-44 h-9 mx-auto flex justify-center items-center hover:scale-110 duration-150 cursor-pointer font-medium text-lg  text-white shadow-md rounded-md'>See what you follow</div>
        <div onClick={()=>{setShowFollowers(true)}} className='w-44 h-9 mx-auto flex justify-center items-center hover:scale-110 duration-150 cursor-pointer font-medium text-lg  text-white shadow-md rounded-md'>See who follows you</div>
    </div>
  )
}

export default ShowFollowButtons