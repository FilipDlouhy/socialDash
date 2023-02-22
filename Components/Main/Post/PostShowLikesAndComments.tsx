"use client"
import { mainContext } from '@/models'
import React,{useContext} from 'react'

interface props
{
    totalLikes:number
    totalComments:number,
    postId:string
}


function PostShowLikesAndComments({postId,totalLikes,totalComments}:props) {
    const {handleOpenShowLikesOrComments} = useContext(mainContext)
  return (
    <div className='w-1/2 h-full flex  justify-around items-center'>
        <div onClick={()=>{handleOpenShowLikesOrComments(postId,"post",true)}}  className='w-1/2  hover:scale-90 duration-200 cursor-pointer h-full flex shadow-lg flex-col justify-center items-center'>
            <p className=' text-xl text-white font-semibold'>Likes</p>
            <p className=' text-xl text-white font-semibold'>{totalLikes}</p>
        </div>

        <div  onClick={()=>{handleOpenShowLikesOrComments(postId,"post",false)}} className='w-1/2 hover:scale-90 duration-200 cursor-pointer  h-full flex shadow-lg  flex-col justify-center items-center'>
            <p className=' text-xl text-white font-semibold'>Comments</p>
            <p className=' text-xl text-white font-semibold'>{totalComments}</p>
        </div>
    </div>
  )
}

export default PostShowLikesAndComments