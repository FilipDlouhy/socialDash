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

function FriendModalPost({userId,post}:props) {
  return (
    <Link href={`/PostPage/${post.post.id}/${userId}`} className='w-60 h-60 hover:shadow-none duration-300 cursor-pointer mx-3 my-2 friendProfileShadow'>
        {post.post.img &&<img src={post.post.img} className=' w-full h-full'></img>}
    </Link>
  )
}

export default FriendModalPost