"use client"
import { User } from '@prisma/client'
import { useContext } from 'react'
import React from 'react'
import { mainContext } from '@/models'


interface props {
  friend:User | undefined
}

function SuggestedFriend({friend}:props) {
  const {setFriend} = useContext(mainContext)
  const {setShowModalFriend} = useContext(mainContext)
  return (
    <div onClick={()=>{

      setFriend(friend?.id)
      setShowModalFriend(true)
    }} className='hover:scale-105 cursor-pointer duration-200 flex justify-between px-3 my-1  items-center w-72 h-14 m-1 rounded-md shadow-md '>
       {friend?.img&& <img src={friend?.img} className='h-10 w-10 rounded-full'></img>}
        <p className='text-white text-sm font-medium'>{friend?.userName}</p>    
    </div>
  )
}

export default SuggestedFriend