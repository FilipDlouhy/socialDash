import { Post, Tweet, User } from '@prisma/client'
import React from 'react'
import UserPageFavoritePostsAndTweets from './UserPageFavoritePostsAndTweets'
import ProfilePageFavoritePostsAndTweets from './UserPageFavoritePostsAndTweets'
import UserPageFollows from './UserPageFollows'
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
    <div className='w-1/4 h-full'>

        <UserPageFavoritePostsAndTweets userName={userName} userId={userId} mostLikedPOSTS={mostLikedPOSTS} mostLikedTWEETS={mostLikedTWEETS}/>

        <UserPageFollows/>

    </div>
  )
}

export default RightSideOfUserPage