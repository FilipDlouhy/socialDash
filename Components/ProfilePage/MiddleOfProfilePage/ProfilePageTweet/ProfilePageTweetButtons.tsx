"use client"
import { mainContext } from '@/models'
import Link from 'next/link'
import React,{useContext} from 'react'

interface props{
    tweetId:string
    userId:string
}

function ProfilePageTweetButtons({tweetId,userId}:props) {
  const {handleOpenShowLikesOrComments} = useContext(mainContext)

  return (
            <div className='w-full h-32 py-1 px-4'>
                
                <div className='w-full flex items-center justify-around  h-11 p-2'>
                    <button onClick={()=>{handleOpenShowLikesOrComments(tweetId,"tweet",false)}} className='w-32 text-white font-medium hover:scale-105 duration-200 cursor-pointer  h-6 shadow-md flex items-center justify-center'>Comments</button>
                    <button onClick={()=>{handleOpenShowLikesOrComments(tweetId,"tweet",true)}} className='w-32 text-white font-medium hover:scale-105 duration-200 cursor-pointer  h-6 shadow-md flex items-center justify-center'>Likes</button>
                </div>

                <div className='w-full flex items-center justify-around  h-11 p-2'>
                    <Link href={`/TweetPage/${tweetId}/${userId}`} className='w-32 text-white font-medium hover:scale-105 duration-200 cursor-pointer  h-6 shadow-md flex items-center justify-center'>See whole Tweet</Link>
                </div>
                
                <div className='w-full  flex items-center justify-around h-11 p-2'>
                    <Link href={`/TweetPageUpdateTweet/${tweetId}/${userId}`} className='w-32 text-white font-medium hover:scale-105 duration-200 cursor-pointer  h-6 shadow-md flex items-center justify-center'>Update</Link>
                    <button className='w-32 text-white font-medium hover:scale-105 duration-200 cursor-pointer  h-6 shadow-md flex items-center justify-center'>Delete</button>                    
                </div>

            </div>    
  )
}

export default ProfilePageTweetButtons    