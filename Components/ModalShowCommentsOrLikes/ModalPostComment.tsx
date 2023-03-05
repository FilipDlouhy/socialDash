import React from 'react'
import { PostComment } from '@prisma/client';


interface  props{
 comment:PostComment
}

function ModalPostComment({comment}:props) {
  return (
    <div className='w-full hover:shadow-none cursor-pointer duration-200 mb-2 h-28 flex ShowsLikesCommentsShadow'>

        <div className='w-1/3 flex flex-col  justify-around items-center h-full'>
            <img src={comment?.userImg} className='w-16 h-16  rounded-full'></img>
            <p className='text-lg font-bold '>{comment?.userName}</p>
        </div>

        <div className='w-2/3 text-sm font-medium   flex justify-center items-center h-full'>
            <p> {comment?.text}</p>
        </div>
    </div>

  )
}

export default ModalPostComment