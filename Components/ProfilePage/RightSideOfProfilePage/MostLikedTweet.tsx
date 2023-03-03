import { Tweet, User } from '@prisma/client'
import React from 'react'


interface TWEET{
    user: User, tweet: Tweet 
  }

interface props {
    tweet:TWEET
}

function MostLikedTweet({tweet}:props) {
  return (
  
    <div className='w-32 hover:scale-110 duration-200 cursor-pointer h-44  shadow-lg m-2'>
        <p className='w-full h-3/5 border-b-2 text-center flex items-center justify-center text-xs font-semibold text-white'>{tweet.tweet.description}</p>
        <p className='w-full h-2/5 text-center flex items-center justify-center text-sm font-semibold text-white'>Tweet from {tweet.user.userName}</p>
    </div>
  )
}

export default MostLikedTweet