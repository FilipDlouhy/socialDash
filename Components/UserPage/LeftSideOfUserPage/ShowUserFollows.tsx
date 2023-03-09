"use client"
import { mainContext } from '@/models'
import React,{useContext} from 'react'

interface props{
    userName:string
}

function ShowUserFollows({userName}:props) {
    const {setShowFollows} = useContext(mainContext)
    const {setShowFollowers} = useContext(mainContext)
  return (
    <div className='w-full flex justify-between items-center px-3 h-10'>
        <div onClick={()=>{setShowFollows(true)}} className='w-64  mx-1 h-9  flex justify-center items-center hover:scale-110 duration-150 cursor-pointer font-medium   text-sm text-white shadow-md rounded-md'>See what {userName} follow</div>
        <div onClick={()=>{setShowFollowers(true)}} className='w-64  mx-1 h-9  flex justify-center items-center hover:scale-110 duration-150 cursor-pointer font-medium  text-sm  text-white shadow-md rounded-md'>See who follows {userName}</div>
    </div>
  )
}

export default ShowUserFollows