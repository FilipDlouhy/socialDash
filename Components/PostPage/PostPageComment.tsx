import { PostComment } from '@prisma/client'
import React from 'react'

interface props{
    comment:PostComment
}

function PostPageComment({comment}:props) {
  return (
    <div className='w-11/12 h-20 flex mx-auto my-4'>
        <div className='h-full w-1/4 flex items-center justify-center'>
            {comment.userImg &&<img src={comment.userImg} className='w-16 h-16 hover:scale-105 duration-200 cursor-pointer rounded-full'></img>}
        </div>
        <div className='h-full w-3/4 flex items-center justify-center '>
            <p className=' text-center font-semibold text-white text-xs'>{comment.text}</p>
        </div>

    </div>
  )
}

export default PostPageComment