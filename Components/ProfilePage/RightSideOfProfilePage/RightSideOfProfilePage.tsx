import { Post, Tweet, User } from '@prisma/client'
import React from 'react'
import ProfilePageFavoritePostsAndTweets from './ProfilePageFavoritePostsAndTweets'
import ProfilePagePossibleNewFriends from './ProfilePagePossibleNewFriends'
import ProfilePageRightColors from './ProfilePageRightColors'
interface POST{
  user: User, post: Post 
}
interface TWEET{
  user: User, tweet: Tweet 
}
interface props{
  mostLikedPOSTS:POST[]
  mostLikedTWEETS:TWEET[]
  possibleFriends:User[]
  userId:string
}

function RightSideOfProfilePage({userId,possibleFriends,mostLikedPOSTS,mostLikedTWEETS}:props) {
  return (
    <div className='w-full flex flex-col items-center justify-center md:block md:w-1/4 h-full pl-4'>

        <ProfilePagePossibleNewFriends userId={userId} possibleFriends={possibleFriends}/>
        <ProfilePageFavoritePostsAndTweets userId={userId} mostLikedPOSTS={mostLikedPOSTS} mostLikedTWEETS={mostLikedTWEETS}/>

        <ProfilePageRightColors/>


    </div>
  )
}

export default RightSideOfProfilePage