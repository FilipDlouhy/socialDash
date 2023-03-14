
import { User } from '@prisma/client'
import React from 'react'
import UserSmallProfile from './UserSmallProfile/UserSmallProfile'

  interface props{
    user:User,
    numberOfUserPosts:number,
    numberOfUserTweets:number,
    friends:User[]| undefined
    numberOfUserVideos:number

  }
 function LeftSideOfMainPage({numberOfUserVideos,friends,numberOfUserTweets,user,numberOfUserPosts}:props) {
  return (
    <div className='h-full w-1/4 flex justify-center items-start'>
        <UserSmallProfile numberOfUserVideos={numberOfUserVideos} friends={friends} user={user} numberOfUserTweets={numberOfUserTweets} numberOfUserPosts={numberOfUserPosts}/>
    </div>
  )
}

export default LeftSideOfMainPage