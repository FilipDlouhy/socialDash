import { VideoComment } from '@prisma/client'
import React from 'react'



interface props{
    comment:VideoComment
}

function VideoPageComment({comment}:props) {
  return (
    <div className='flex w-5/6 h-24 ChatDeleteBtn my-3 mx-auto'>
        <div className='w-2/5 h-full flex flex-col justify-around items-center'>
           {comment.userImg && <img src={comment.userImg} className='w-14 h-14 rounded-full'></img>}
            <p className='text-xs font-semibold text-white' >{comment.userName}</p>
        </div>
        <div className='w-3/5 h-full flex justify-around items-center'>
            <textarea value={comment.text} disabled className='resize-none text-xs font-mediumw-full bg-transparent p-2 text-center text-white h-full'></textarea>
        </div>

    </div>
  )
}

export default VideoPageComment