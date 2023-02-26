import { Tweet, User } from '@prisma/client'
import React from 'react'
interface tweet{
    user: User, tweet: Tweet 
}

interface props {
    tweet:tweet
}

function FriendModalTweet({tweet}:props) {
    function getWordStr(str:String) {
        return str?.split(/\s+/).slice(0, 15).join(" ");
        }
  return (
    <div className='flex items-center justify-center w-60 h-60 hover:shadow-none duration-300 cursor-pointer mx-3 my-2 friendProfileShadow'>
        <p className='text-center font-semibold text-sm'>{getWordStr(tweet.tweet.description)}</p>
    </div>
  )
}

export default FriendModalTweet