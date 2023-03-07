import { Tweet, User } from '@prisma/client'
import Link from 'next/link'
import React from 'react'


interface TWEET{
    user: User, tweet: Tweet 
  }

interface props {
    tweet:TWEET
    userId:string

}

function MostLikedTweet({userId,tweet}:props) {
  return (
  
    <Link href={`/TweetPage/${tweet.tweet.id}/${userId}`} className='w-32 hover:scale-110 duration-200 cursor-pointer h-32    shadow-2xl m-2'>
        <p className='w-full h-full text-center flex items-center justify-center text-xs font-semibold text-white'>{tweet.tweet.description}</p>
    </Link>
  )
}

export default MostLikedTweet