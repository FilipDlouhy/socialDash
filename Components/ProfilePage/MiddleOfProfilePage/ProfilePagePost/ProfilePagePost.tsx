import { Post } from '@prisma/client'
import React from 'react'
import ProfilePagePostButtons from './ProfilePagePostButtons'

interface props{
    post:Post,
    userId:string
}


function ProfilePagePost({userId,post}:props) {

  return (
    <div className='ProfilePagePost my-4'>
        <div className='w-full h-1/2'>
           { post.img && <img src={post.img} className='w-full h-full'></img>}
        </div>

        <div className='w-full h-1/2'>
            <div className='w-full h-1/3 flex flex-col justify-around items-center p-2'>
                <p className='font-bold  text-lg text-white text-center'>{post.title}</p>
                <p className='text-sm font-medium text-white text-center'>{post.description}</p>
            </div>

            <ProfilePagePostButtons userId={userId} post={post}/>
        </div>
</div>
  )
}

export default ProfilePagePost