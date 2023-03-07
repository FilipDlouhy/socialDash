import { Tweet, User } from '@prisma/client'
import Link from 'next/link'
import React from 'react'
interface tweet{
    user: User, tweet: Tweet 
}

interface props {
    tweet:tweet
    userId:string
}

function FriendModalTweet({userId,tweet}:props) {
    function getWordStr(str:String) {
        return str?.split(/\s+/).slice(0, 15).join(" ");
        }
  return (
    <Link href={`/TweetPage/${tweet.tweet.id}/${userId}`} className='flex items-center justify-center w-60 h-60 hover:shadow-none duration-300 cursor-pointer mx-3 my-2 friendProfileShadow'>
        <p className='text-center font-semibold text-sm'>{getWordStr(tweet.tweet.description)}</p>
    </Link>
  )
}

export default FriendModalTweet