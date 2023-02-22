import React from 'react'
import { PostComment, TweetComment } from '@prisma/client';


interface  props{
 comment:TweetComment
}

function ModalTweetComment({comment}:props) {
  return (
    <div className='w-full hover:shadow-none cursor-pointer duration-200 mb-2 h-28 flex ShowsLikesCommentsShadow'>

        <div className='w-1/3 flex flex-col  justify-around items-center h-full'>
            <p className='text-lg font-bold '>{comment?.userName}</p>
        </div>

        <div className='w-2/3 text-sm font-medium   flex justify-center items-center h-full'>
            <p> {comment?.text}</p>
        </div>
    </div>

  )
}

export default ModalTweetComment