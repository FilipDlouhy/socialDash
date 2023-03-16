import { VideoComment } from '@prisma/client'
import { compare } from 'bcryptjs'
import Link from 'next/link'
import React from 'react'

interface props{
  comment:VideoComment
  userId:string
}
function VideoCommentComponent({userId,comment}:props) {
  return (
    <Link  href={userId === comment.userId ?`/ProfilePage/${userId}`:`/UserPage/${comment.userId}/${userId}`}  className="w-11/12 ChatDeleteBtn mx-auto my-4 rounded flex flex-col lg:flex-row pl-4 lg:pl-0   h-48">
        <div className="w-1/2 flex flex-col items-center justify-around  h-full">
            {comment.userImg && <img src={comment.userImg} className="hover:scale-90 duration-200 w-16 h-16 lg:w-28 lg:h-28 rounded-full"></img>}
            <p className='text-base lg:text-xl font-semibold text-white '>{comment.userName} </p>
        </div>
        <div className="w-1/2 h-full flex justify-center items-center">
            <textarea disabled value={comment.text} className=" text-center pt-6 text-sm lg:text-base  bg-transparent text-white font-medium  flex items-center justify-center   resize-none w-full h-full break-words"> </textarea>
        </div>
    </Link>
  )
}

export default VideoCommentComponent