import { Post, User } from '@prisma/client'
import Link from 'next/link'
import React from 'react'

interface POST{
    user: User, post: Post 
  }
interface props{
    post: POST
    userId:string

}

function MostLikedPost({userId,post}:props) {
  return (
    <Link href={`/PostPage/${post.post.id}/${userId}`} className='w-32 hover:scale-110 duration-200 cursor-pointer h-44 shadow-2xl m-2'>
        {post.post.img && <img src={post.post.img} className='w-full h-3/5'></img>}
        <p className='w-full h-2/5 text-center flex items-center justify-center text-sm font-semibold text-white'>Post from{post.user.userName}</p>
    </Link>
  )
}

export default MostLikedPost