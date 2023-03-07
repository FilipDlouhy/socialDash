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
    <Link href={`/PostPage/${post.post.id}/${userId}`} className='w-32 hover:scale-110 duration-200 cursor-pointer h-32 shadow-2xl m-2'>
        {post.post.img && <img src={post.post.img} className='w-full h-full'></img>}
    </Link>
  )
}

export default MostLikedPost