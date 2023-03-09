import { TweetComment } from '@prisma/client'
import React from 'react'
import TweetPageCommentNameLink from './TweetPageCommentNameLink'
import TweetPageCommentNaleLink from './TweetPageCommentNameLink'

interface props{
    comment:TweetComment
}

function TweetPageTweetComment({comment}:props) {
  return (
    <div className='w-full h-20 py-4 px-6 flex items-center justify-between'>
        
        <div className=' w-full h-full flex items-center justify-around flex-col'>
                <TweetPageCommentNameLink userId={comment.userId} userName={comment.userName}/>
                <p className='text-xs font-semibold text-white'>{comment.text}</p>  
        </div>

    </div>
  )
}

export default TweetPageTweetComment