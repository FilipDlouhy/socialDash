import { Post } from '@prisma/client'
import React from 'react'
import UserPagePostButtons from './UserPagePostButtons'

interface props{
    post:Post,
    userId:string
}


function UserPagePost({userId,post}:props) {

  return (
    <div className='UserPagePost my-4'>
        <div className='w-full h-2/3'>
           { post.img && <img src={post.img} className='w-full h-full'></img>}
        </div>

        <div className='w-full h-1/3'>
            <div className='w-full h-1/3 flex flex-col justify-around items-center p-2'>
                <p className='font-bold  text-lg text-white text-center'>{post.title}</p>
                <p className='text-sm font-medium text-white text-center'>{post.description}</p>
            </div>

            <UserPagePostButtons userId={userId} post={post}/>
        </div>
</div>
  )
}

export default UserPagePost