import { User } from '@prisma/client';
import Link from 'next/link';
import React from 'react'
import ProfilePageUserProfileLinks from './ProfilePageUserProfileLinks';
import ProfilePageUserProfileUserData from './ProfilePageUserProfileUserData';


interface UserAndData {
  user: User;
  tweetLength: number;
  postLength: number;
}


interface props {
  UserAndData:UserAndData
  totalFriends:number

}

function ProfilePageUserProfile({totalFriends,UserAndData}:props) {
  return (
    <div className='ProfilePageUserProfile  p-3'>

      <div className='w-full h-1/2 flex justify-around items-center'>
        { UserAndData.user.img   &&<img src={UserAndData.user.img} className='w-28 h-28 rounded-full'></img>}
        <ProfilePageUserProfileUserData UserAndData={UserAndData} totalFriends={totalFriends}/>

       </div>

        <ProfilePageUserProfileLinks userId={UserAndData.user.id}/>

    </div>
  )
}

export default ProfilePageUserProfile