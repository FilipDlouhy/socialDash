import { Post, User } from '@prisma/client'
import Link from 'next/link'
import React from 'react'
interface post{
    user: User, post: Post 
  }
interface props{
    post:post
    userId:string
}

function PostUserProfile({post,userId}:props) {
  return (
        <Link href={userId === post.post.userId ?`/ProfilePage/${userId}`:`/UserPage/${post.post.userId}/${userId}`} className='flex items-center shadow-md hover:scale-105 hover:shadow-none duration-150 cursor-pointer h-full w-56 pl-4'>
        {post.user.img && <img src={post.user.img} className=' cursor-pointer w-16 h-16 rounded-full'></img>}
        <div className= ' pl-4 flex flex-col w-32 justify-start items-start'>
            <p className='cursor-pointer text-sm  text-white font-semibold '>From {post.user.userName}</p>
            <p className='text-white text-xs font-medium'>Post From: {post.post.placeFrom}</p>
        </div>
    </Link>

  )
}

export default PostUserProfile