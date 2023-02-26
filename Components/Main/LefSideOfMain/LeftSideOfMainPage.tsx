
import { User } from '@prisma/client'
import React from 'react'
import UserSmallProfile from './UserSmallProfile/UserSmallProfile'

  interface props{
    user:User,
    numberOfUserPosts:number,
    numberOfUserTweets:number,
    friends:User[]| undefined

  }
 function LeftSideOfMainPage({friends,numberOfUserTweets,user,numberOfUserPosts}:props) {
  return (
    <div className='h-full w-1/4 flex justify-center items-start'>
        <UserSmallProfile friends={friends} user={user} numberOfUserTweets={numberOfUserTweets} numberOfUserPosts={numberOfUserPosts}/>
    </div>
  )
}

export default LeftSideOfMainPage