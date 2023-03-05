import { Post, Tweet, User } from '@prisma/client'
import React from 'react'
import MostLikedPost from './MostLikedPost'
import MostLikedTweet from './MostLikedTweet'
interface POST{
    user: User, post: Post 
  }
  interface TWEET{
    user: User, tweet: Tweet 
  }
interface props{
    mostLikedPOSTS:POST[]
    mostLikedTWEETS:TWEET[]
    userId:string

  }
function ProfilePageFavoritePostsAndTweets({userId,mostLikedPOSTS,mostLikedTWEETS}:props) {
  return (
    <div className='ProfilePageFavoritePosts my-6'>
        <p className='w-full h-12 font-semibold flex items-center justify-center text-white text-xl'>Posts and Tweets wich people Liked Mosts</p>
        
        <div className='w-full h-5/6 flex justify-center flex-wrap items-start'>
                    {mostLikedPOSTS.map((post)=>{
                        return <MostLikedPost post={post} userId={userId} />
                    })}

                    {mostLikedTWEETS.map((tweet)=>{
                        return <MostLikedTweet tweet={tweet} userId={userId}/>
                    })}
        </div>
    </div>
  )
}

export default ProfilePageFavoritePostsAndTweets