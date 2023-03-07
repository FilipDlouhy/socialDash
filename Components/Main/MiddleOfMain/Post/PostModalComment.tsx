import { PostComment } from '@prisma/client';
import Link from 'next/link';
import React from 'react'
interface props{
    comment:PostComment
    userId:string
}

function PostModalComment({userId,comment}:props) {
    function getWordStr(str:string) {
        return str?.split(/\s+/).slice(0,2).join(" ");
        }
  return (
     <Link href={userId === comment.userId ?`/ProfilePage/${userId}`:`/UserPage/${comment.userId }/${userId}`} className='w-full h-14 hover:shadow-none duration-300 cursor-pointer flex justify-around items-center  modalCommentShadow my-4'>
        <div className='w-1/2 h-full flex items-center justify-around '>
           {comment?.userImg && <img src={comment?.userImg} className='w-12 h-12 rounded-full'></img>}
            <p className='text-xs font-bold'>{comment?.userName}</p>
        </div>
        <div className='w-1/2 h-full  flex items-center justify-center text-sm  font-medium'>
            <p>{getWordStr(comment?.text)}..</p>
        </div>
    </Link>
  )
}

export default PostModalComment