
import Link from 'next/link'
import React, { useEffect } from 'react'

interface Comment
{
    text:string,
    userId:string,
    userImg:string,
    postId:String,
    userName:String
}
  interface props{
    comment:Comment
    userId:string
  }
function PostComment({userId,comment}:props) {
  const text = comment.text?.slice(0,15)
  
  
  return (
    <Link href={userId === comment.userId ?`/ProfilePage/${userId}`:`/UserPage/${comment.userId}/${userId}`} className='flex postCommentShadow duration-200 hover:scale-90 cursor-pointer w-1/2 h-1/3'>
        <div className='h-full flex justify-center items-center w-1/3 '>
           {comment && <img src={comment.userImg} className='w-10 h-10 rounded-full'></img>}
        </div>
        <div className='h-full flex justify-around items-start flex-col'>
            <p className='text-xs font-semibold text-white'>{comment.userName}</p>
            <p className='text-xs font-medium text-white'>{text}</p>
        </div>
    </Link>
  )
}

export default PostComment