"use client"
import axios from 'axios'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React from 'react'

interface props{
    Title: string
    Category: string
    Text: string
    tweetId:string
    userId:string
}


function TweetPageUpdateButtons({tweetId,userId,Category,Text,Title}:props) {
    const router = useRouter()
    function updateTweet(){
        const newTweet={tweetId:tweetId,Category:Category,Text:Text,Title:Title}
        axios.post("http://localhost:3000/api/tweetUpdate",newTweet).then((res)=>{
            if(res.data.message==="OK")
            {
                router.push(`/ProfilePage/${userId}`)
            }
        })
    }

  return (
    <div className='w-full h-1/6 flex items-center justify-around'>
        <Link   href={`/ProfilePage/${userId}`} className='w-72 h-10 bg-[#09a3e0] rounded-sm flex items-center justify-center font-bold text-white text-xl hover:scale-105 duration-300 cursor-pointer  hover:bg-[#98FB98]'>Go Back</Link>
        <button onClick={()=>{updateTweet()}} className='w-72 h-10 bg-[#09a3e0] rounded-sm flex items-center justify-center font-bold text-white text-xl hover:scale-105 duration-300 cursor-pointer  hover:bg-[#00FF00]'>Update</button>
    </div>
  )
}

export default TweetPageUpdateButtons