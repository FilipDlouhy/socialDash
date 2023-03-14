import { VideoComment } from '@prisma/client'
import Link from 'next/link'
import React from 'react'


interface props{
    comment:VideoComment
    userId:string
}

function VideoModalComment({userId,comment}:props) {
  return (
    <Link href={userId === comment.userId ?`/ProfilePage/${userId}`:`/UserPage/${comment.userId}/${userId}`} className='hover:shadow-none cursor-pointer duration-300 w-80 h-80 ChatDeleteBtn m-4'>
        <div className='w-full h-1/2 flex flex-col items-center justify-center'>
           {comment.userImg && <img src={comment.userImg} className='w-32 h-32 rounded-full'></img>}
           <p className='text-xl font-semibold'>{comment.userName}</p>
        </div>
        <div className='w-full h-1/2'>
            <textarea value={comment.text} disabled className='p-4 text-center resize-none w-full h-full bg-transparent font-semibold'></textarea>
        </div>
    </Link> 
  )
}

export default VideoModalComment