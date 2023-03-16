import { Post, Tweet, User } from '@prisma/client'
import React from 'react'
import UserPageFavoritePostsAndTweets from './UserPageFavoritePostsAndTweets'
import ProfilePageFavoritePostsAndTweets from './UserPageFavoritePostsAndTweets'
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
  userName:string
}

function RightSideOfUserPage({userName,userId,mostLikedPOSTS,mostLikedTWEETS}:props) {
  return (
    <div className='w-full flex items-center justify-center xl:w-1/4 h-full'>

        <UserPageFavoritePostsAndTweets userName={userName} userId={userId} mostLikedPOSTS={mostLikedPOSTS} mostLikedTWEETS={mostLikedTWEETS}/>


    </div>
  )
}

export default RightSideOfUserPage