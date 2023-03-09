import { User } from '@prisma/client';
import Link from 'next/link';
import React, { useState } from 'react'
import ProfilePageUserProfileLinks from './UserPageUserProfileLinks';
import ProfilePageUserProfileUserData from './UserPageUserProfileUserData';


interface UserAndData {
  user: User;
  tweetLength: number;
  postLength: number;
}


interface props {
  UserAndData:UserAndData
  isFriend:boolean
  isFollowing:boolean
  Friend:UserAndData
  userId:string
  setRender: React.Dispatch<React.SetStateAction<string>>

}

function UserPageUserProfile({ setRender,Friend,userId,isFollowing,isFriend,UserAndData}:props) {
    const [totalFollowers,setTotalFollowers] = useState<number>(Friend.user.followers.length)
    const [totalFriends,setTotalFriends] = useState<number>(Friend.user.friends.length)
  return (
    <div className='ProfilePageUserProfile  p-3'>
      
      <div className='w-full h-1/2 flex justify-around items-center'>
        { UserAndData.user.img   &&<img src={UserAndData.user.img} className='w-28 h-28 rounded-full'></img>}
        <ProfilePageUserProfileUserData  totalFollowers={totalFollowers} totalFriends={totalFriends} UserAndData={UserAndData}/>

       </div>

        <ProfilePageUserProfileLinks setRender={setRender}  userName={UserAndData.user.userName} totalFollowers={totalFollowers} setTotalFollowers={setTotalFollowers} totalFriends={totalFriends} setTotalFriends={setTotalFriends} isFollowing={isFollowing} friendId={UserAndData.user.id} isFriend={isFriend} userId={userId}/>

    </div>
  )
}

export default UserPageUserProfile