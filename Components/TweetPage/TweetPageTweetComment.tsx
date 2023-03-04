import { TweetComment } from '@prisma/client'
import React from 'react'

interface props{
    comment:TweetComment
}

function TweetPageTweetComment({comment}:props) {
  return (
    <div className='w-full h-20 py-4 px-6 flex items-center justify-between'>
        
        <div className=' w-full h-full flex items-center justify-around flex-col'>
                <p className='hover:scale-110 hover:text-blue-400 duration-300 cursor-pointer text-sm font-bold text-white'>{comment.userName}</p>  
                <p className='text-xs font-semibold text-white'>{comment.text}</p>  
        </div>

    </div>
  )
}

export default TweetPageTweetComment