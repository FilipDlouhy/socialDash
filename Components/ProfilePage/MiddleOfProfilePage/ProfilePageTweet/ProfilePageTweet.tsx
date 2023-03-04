import { Tweet } from '@prisma/client'
import React from 'react'
import ProfilePageTweetButtons from './ProfilePageTweetButtons';

interface props{
    tweet:Tweet
    userId:string
}

function ProfilePageTweet({userId,tweet}:props) {
        
    function getWordStr(str:string) {
        return str?.split(/\s+/).slice(0, 50).join(" ");
        }
  return (
    <div className='ProfilePageTweet my-4'>
        <div className='ProfilePageTweetShadow w-full h-2/3'>
            <p className='h-12 flex items-center justify-center text-white text-lg font-semibold '>{tweet.title}</p>
            
            <p className='w-full px-2 h-36 text-center font-bold text-white text-sm'>{getWordStr(tweet.description)}</p>

            <ProfilePageTweetButtons userId={userId} tweetId={tweet.id} />


        </div>
    </div>
  )
}

export default ProfilePageTweet