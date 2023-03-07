import Link from 'next/link'
import React from 'react'
interface comment {
    text    :  String ,
    userId  :  String ,
    tweetId  : String,
    userName : String
  }
  interface props{
    comment:comment
    userId:string
  }
function TweetModalComment({comment,userId}:props) {
  return (
   <Link href={userId === comment.userId ?`/ProfilePage/${userId}`:`/UserPage/${comment.userId }/${userId}`} className='w-full h-14 hover:shadow-none duration-300 cursor-pointer flex justify-around items-center  modalCommentShadow my-4'>
            
            <div className='w-1/2 h-full flex items-center justify-around '>
                <p className=' font-bold'>{comment.userName}</p>
            </div>

            <div className='w-1/2 h-full  flex items-center justify-center   font-medium'>
                <p>{comment.text}</p>
            </div>

    </Link>
  )
}

export default TweetModalComment