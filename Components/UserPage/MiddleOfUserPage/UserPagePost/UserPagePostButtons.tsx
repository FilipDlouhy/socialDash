"use client"
import { mainContext } from '@/models'
import { Post } from '@prisma/client'
import axios from 'axios'
import Link from 'next/link'
import React ,{useContext}from 'react'

interface props{
  post:Post
  userId:string
}

function UserPagePostButtons({userId,post}:props) {
  const {handleOpenShowLikesOrComments} = useContext(mainContext)
  return (
    <div>
        <div className='w-full flex items-center justify-around  h-16 p-2'>
            <button onClick={()=>{handleOpenShowLikesOrComments(post.id,"post",false)}} className='w-32 text-white font-medium hover:scale-105 duration-200 cursor-pointer  h-7 shadow-md flex items-center justify-center'>Comments</button>
            <button onClick={()=>{handleOpenShowLikesOrComments(post.id,"post",true)}} className='w-32 text-white font-medium hover:scale-105 duration-200 cursor-pointer  h-7 shadow-md flex items-center justify-center'>Likes</button>
        </div>

        <div className='w-full h-10 flex items-center justify-center'>
            <Link href={`/PostPage/${post.id}/${userId}`} className='w-32 text-white font-medium hover:scale-105 duration-200 cursor-pointer  h-7 shadow-md flex items-center justify-center'>See whole Post</Link>
        </div>


    </div>
  )
}

export default UserPagePostButtons