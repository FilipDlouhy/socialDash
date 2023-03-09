"use client"
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import React from 'react'

interface props{
    userId:string
    userName:string
}

function TweetPageCommentNameLink({userId,userName}:props) {
    const session = useSession()
    const router = useRouter()
  return (
    <p onClick={()=>{
        if(userId === session.data?.user?.name)
        {
          router.push(`/ProfilePage/${ session.data?.user?.name}`)
        }
        else
        {
          router.push(`/UserPage/${userId}/${session.data?.user?.name}`)
        }
      }} className='hover:scale-110 hover:text-blue-400 duration-300 cursor-pointer text-sm font-bold text-white'>{userName}</p>  
  )
}

export default TweetPageCommentNameLink