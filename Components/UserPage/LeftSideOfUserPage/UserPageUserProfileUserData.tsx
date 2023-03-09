import { User } from '@prisma/client';
import React, { useState } from 'react'

interface UserAndData {
    user: User;
    tweetLength: number;
    postLength: number;
  }
  
  
  interface props {
    UserAndData:UserAndData
    totalFollowers:number
    totalFriends:number
  }


function UserPageUserProfileUserData({totalFriends,totalFollowers,UserAndData}:props) {
  return (
    <div className='w-72 h-full '>
        <div className='w-full h-1/2 flex items-center justify-between px-3'>

            <p className='font-medium text-sm text-white'>Name: {UserAndData?.user.userName}</p>
            <p className='font-medium text-sm text-white'>From: {UserAndData?.user.placeToLive}</p>

        </div>
        <div className='w-full h-1/2 flex items-center justify-between px-3'>
            <div className='w-1/2 h-full flex items-start justify-around flex-col'>
            <p className='font-medium text-sm text-white'>Posts: {UserAndData?.postLength}</p>
            <p className='font-medium text-sm text-white'>Tweets: {UserAndData?.tweetLength}</p>
            <p className='font-medium text-sm text-white'>Videos: 666</p>
            </div>
            <div className='flex flex-col items-center w-40'>
              <p className='font-medium text-sm text-white my-2'>Following: {UserAndData.user.following.length}</p>
              <p className='font-medium text-sm text-white my-2'>Followers: {totalFollowers}</p>
              <p className='font-medium text-sm text-white my-2'>Friends: {totalFriends}</p>
            </div>
            

        </div>
</div> 
  )
}

export default UserPageUserProfileUserData