import { User } from '@prisma/client';
import React from 'react'
import ProfilePageFriends from './ProfilePageFriends'
import ProfilePageUserProfile from './ProfilePageUserProfile'

interface UserAndData {
  user: User;
  tweetLength: number;
  postLength: number;
}


interface props {
  UserAndData:UserAndData
  totalFriends:number
  friends:User[] 
}
function LeftSideOfProfilePage({friends,totalFriends,UserAndData}:props) {
  return (
    <div className='w-1/4 flex flex-col items-center  mt-10 '>
        <ProfilePageUserProfile totalFriends={totalFriends} UserAndData={UserAndData} />
        <ProfilePageFriends friends={friends}/>
    </div>
  )
}

export default LeftSideOfProfilePage