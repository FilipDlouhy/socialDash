import { Tweet } from '@prisma/client'
import React from 'react'
import UserPageTweetButtons from './UserPageTweetButtons';

interface props{
    tweet:Tweet
    userId:string
}

function UserPageTweet({userId,tweet}:props) {
        
    function getWordStr(str:string) {
        return str?.split(/\s+/).slice(0, 50).join(" ");
        }
  return (
    <div className='UserPageTweet my-4'>
        <div className='ProfilePageTweetShadow w-full h-2/3'>
            <p className='h-12 flex items-center justify-center text-white text-lg font-semibold '>{tweet.title}</p>
            
            <p className='w-full px-2 h-36 text-center font-bold text-white text-sm'>{getWordStr(tweet.description)}</p>

            <UserPageTweetButtons userId={userId} tweetId={tweet.id} />


        </div>
    </div>
  )
}

export default UserPageTweet