import { Tweet, User } from '@prisma/client'
import Link from 'next/link'
import React from 'react'
interface tweet{
    user: User, tweet: Tweet 
  }

interface props
{
    tweet:tweet
    userId:string
}

function TweetUserProfile({tweet,userId}:props) {
  return (
    <Link href={userId === tweet.user.id ?`/ProfilePage/${userId}`:`/UserPage/${tweet.tweet.userId}/${userId}`}  className='flex pl-2 h-full shadow-md hover:scale-90 duration-150 cursor-pointer items-center '>
        {tweet.user.img &&  <img src={tweet.user.img} className= 'cursor-pointer rounded-full w-10 h-10'></img>}
        <div className=' ml-3 flex    w-36 flex-col justify-center items-center'>
            <p className= 'w-full cursor-pointer text-start text-white font-semibold text-base 2xl:text-lg'>{tweet.user.userName}</p>
            <p className= 'w-full text-white  text-start text-xs 2xl:text-sm font-light'>Tweet from {tweet.tweet.theme}</p>
        </div>
    </Link>
  )
}

export default TweetUserProfile