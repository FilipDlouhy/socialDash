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
  }
function PostComment({comment}:props) {
  const text = comment.text?.slice(0,15)
  return (
    <div className='flex postCommentShadow duration-200 hover:scale-90 cursor-pointer w-1/2 h-1/3'>
        <div className='h-full flex justify-center items-center w-1/3 '>
           {comment && <img src={comment.userImg} className='w-10 h-10 rounded-full'></img>}
        </div>
        <div className='h-full flex justify-around items-start flex-col'>
            <p className='text-xs font-semibold text-white'>{comment.userName}</p>
            <p className='text-xs font-medium text-white'>{text}</p>
        </div>
</div>
  )
}

export default PostComment