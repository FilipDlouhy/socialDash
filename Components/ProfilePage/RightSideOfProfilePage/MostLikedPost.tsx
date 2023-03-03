import { Post, User } from '@prisma/client'
import React from 'react'

interface POST{
    user: User, post: Post 
  }
interface props{
    post: POST
}

function MostLikedPost({post}:props) {
  return (
    <div className='w-32 hover:scale-110 duration-200 cursor-pointer h-44 shadow-lg m-2'>
        {post.post.img && <img src={post.post.img} className='w-full h-3/5'></img>}
        <p className='w-full h-2/5 text-center flex items-center justify-center text-sm font-semibold text-white'>Post from{post.user.userName}</p>
    </div>
  )
}

export default MostLikedPost