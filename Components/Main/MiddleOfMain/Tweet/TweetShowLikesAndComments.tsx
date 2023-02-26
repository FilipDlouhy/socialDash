"use client"
import { mainContext } from '@/models'
import React,{useContext} from 'react'

interface props
{
    totalLikes:number
    totalComments:number
    tweetId:string

}


function TweetShowLikesAndComments({tweetId,totalLikes,totalComments}:props) {
      const {handleOpenShowLikesOrComments} = useContext(mainContext)
  return (
    <div className='ml-1 w-52 flex h-full'>
        <div  onClick={()=>{handleOpenShowLikesOrComments(tweetId,"tweet",true)}}className='hover:scale-90 duration-200 cursor-pointer shadow-md w-1/2 h-full flex flex-col items-center justify-around'>
            <p className=' font-semibold text-white'>Likes</p>
            <p className=' font-semibold text-white'>{totalLikes}</p>
        </div>
        <div  onClick={()=>{handleOpenShowLikesOrComments(tweetId,"tweet",false)}}className='hover:scale-90 duration-200 cursor-pointer  shadow-md w-1/2 h-full flex flex-col items-center justify-around'>
            <p  className=' font-semibold text-white'>Comments</p>
            <p className=' font-semibold text-white'>{totalComments}</p>
        </div>
    </div>
  )
}

export default TweetShowLikesAndComments