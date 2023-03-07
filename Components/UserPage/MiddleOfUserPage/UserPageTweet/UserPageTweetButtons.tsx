"use client"
import { mainContext } from '@/models'
import Link from 'next/link'
import React,{useContext} from 'react'

interface props{
    tweetId:string
    userId:string
}

function UserPageTweetButtons({tweetId,userId}:props) {
  const {handleOpenShowLikesOrComments} = useContext(mainContext)

  return (
            <div className='w-full h-44 flex items-center justify-around flex-col  py-5 px-4'>
                
                <div className='w-full flex items-center justify-around  h-11 p-2'>
                    <button onClick={()=>{handleOpenShowLikesOrComments(tweetId,"tweet",false)}} className='w-32 text-white font-medium hover:scale-105 duration-200 cursor-pointer  h-6 shadow-md flex items-center justify-center'>Comments</button>
                    <button onClick={()=>{handleOpenShowLikesOrComments(tweetId,"tweet",true)}} className='w-32 text-white font-medium hover:scale-105 duration-200 cursor-pointer  h-6 shadow-md flex items-center justify-center'>Likes</button>
                </div>

                <div className='w-full flex items-center justify-around  h-11 p-2'>
                    <Link href={`/TweetPage/${tweetId}/${userId}`} className='w-32 text-white font-medium hover:scale-105 duration-200 cursor-pointer  h-6 shadow-md flex items-center justify-center'>See whole Tweet</Link>
                </div>
                


            </div>    
  )
}

export default UserPageTweetButtons    