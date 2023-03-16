import { PostComment } from '@prisma/client'
import React from 'react'
import PostPageCommentImgLink from './PostPageCommentImgLink'

interface props{
    comment:PostComment
}

function PostPageComment({comment}:props) {
  return (
    <div className='w-11/12 h-20 flex mx-auto my-4'>
        <PostPageCommentImgLink img={comment.userImg} imgUserId={comment.userId}/>
        <div className='h-full w-3/4 flex items-center justify-around flex-col  '>
            <p className=' text-center font-bold text-white text-xs md:text-sm' > {comment.userName}</p>
            <p className=' text-center font-semibold text-white text-xs'>{comment.text}</p>
        </div>

    </div>
  )
}

export default PostPageComment