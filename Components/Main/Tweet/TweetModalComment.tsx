import React from 'react'
interface comment {
    text    :  String ,
    userId  :  String ,
    tweetId  : String,
    userName : String
  }
  interface props{
    comment:comment
  }
function TweetModalComment({comment}:props) {
  return (
    <div className='w-full h-14 hover:shadow-none duration-300 cursor-pointer flex justify-around items-center  modalCommentShadow my-4'>
            
            <div className='w-1/2 h-full flex items-center justify-around '>
                <p className=' font-bold'>{comment.userName}</p>
            </div>

            <div className='w-1/2 h-full  flex items-center justify-center   font-medium'>
                <p>{comment.text}</p>
            </div>

    </div>
  )
}

export default TweetModalComment