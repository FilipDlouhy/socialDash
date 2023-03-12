import { VideoComment } from '@prisma/client'
import { compare } from 'bcryptjs'
import React from 'react'

interface props{
  comment:VideoComment
}
function VideoCommentComponent({comment}:props) {
  return (
    <div className="w-11/12 ChatDeleteBtn mx-auto my-4 rounded flex  h-48">
        <div className="w-1/2 flex flex-col items-center justify-around  h-full">
            {comment.userImg && <img src={comment.userImg} className="w-28 h-28 rounded-full"></img>}
            <p className='text-xl font-semibold text-white '>{comment.userName} </p>
        </div>
        <div className="w-1/2 h-full flex justify-center items-center">
            <textarea disabled value={comment.text} className=" text-center pt-6  bg-transparent text-white font-medium  flex items-center justify-center   resize-none w-full h-full break-words"> </textarea>
        </div>
    </div>
  )
}

export default VideoCommentComponent