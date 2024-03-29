import { User } from '@prisma/client';
import React from 'react'
import ProfilePageFriends from './ProfilePageFriends'
import ProfilePageUserProfile from './ProfilePageUserProfile'

interface UserAndData {
  user: User;
  tweetLength: number;
  postLength: number;
  numberOfUserVideos:number
}
interface props {
  UserAndData:UserAndData
  totalFriends:number
  friends:User[] 
}
function LeftSideOfProfilePage({friends,totalFriends,UserAndData}:props) {
  return (
    <div className='w-full md:w-1/4 flex flex-col items-center justify-center  mt-10 '>
        <ProfilePageUserProfile totalFriends={totalFriends} UserAndData={UserAndData} />
        <ProfilePageFriends userId={UserAndData.user?.id} friends={friends}/>
    </div>
  )
}

export default LeftSideOfProfilePage