"use client"
import { mainContext } from '@/models'
import React,{useContext} from 'react'

function ProfilePageShowAllFriendsButton() {
    const {setSeeAllFriends} = useContext(mainContext)
  return (
    <div className='w-full h-14 flex items-center justify-end pr-6'>
        <button onClick={()=>{setSeeAllFriends(true)}} className='w-40 h-7 flex justify-center items-center hover:scale-110 duration-150 cursor-pointer font-medium text-lg  text-white shadow-md rounded-md'>See All Friends </button>
    </div>  
  )
}

export default ProfilePageShowAllFriendsButton