"use client"
import Link from 'next/link'
import React from 'react'

interface props{
    tweetId:string
    userId:string
}

function ProfilePageTweetButtons({tweetId,userId}:props) {
  return (
            <div className='w-full h-32 py-1 px-4'>
                
                <div className='w-full flex items-center justify-around  h-11 p-2'>
                    <button className='w-32 text-white font-medium hover:scale-105 duration-200 cursor-pointer  h-6 shadow-md flex items-center justify-center'>Comments</button>
                    <button className='w-32 text-white font-medium hover:scale-105 duration-200 cursor-pointer  h-6 shadow-md flex items-center justify-center'>Likes</button>
                </div>

                <div className='w-full flex items-center justify-around  h-11 p-2'>
                    <Link href={`/TweetPage/${tweetId}/${userId}`} className='w-32 text-white font-medium hover:scale-105 duration-200 cursor-pointer  h-6 shadow-md flex items-center justify-center'>See whole Tweet</Link>
                </div>
                
                <div className='w-full  flex items-center justify-around h-11 p-2'>
                    <button className='w-32 text-white font-medium hover:scale-105 duration-200 cursor-pointer  h-6 shadow-md flex items-center justify-center'>Update</button>
                    <button className='w-32 text-white font-medium hover:scale-105 duration-200 cursor-pointer  h-6 shadow-md flex items-center justify-center'>Delete</button>                    
                </div>

            </div>    
  )
}

export default ProfilePageTweetButtons    