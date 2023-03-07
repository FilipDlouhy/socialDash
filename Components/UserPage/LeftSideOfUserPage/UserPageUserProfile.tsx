import { User } from '@prisma/client';
import Link from 'next/link';
import React from 'react'
import ProfilePageUserProfileLinks from './UserPageUserProfileLinks';
import ProfilePageUserProfileUserData from './UserPageUserProfileUserData';


interface UserAndData {
  user: User;
  tweetLength: number;
  postLength: number;
}


interface props {
  UserAndData:UserAndData
  totalFriends:number
  isFriend:boolean
  isFollowing:boolean
  totalFollows:number
  setTotalFriends: React.Dispatch<React.SetStateAction<number>>
  setTotalFollows: React.Dispatch<React.SetStateAction<number>>
  TotalFriends:number
  TotalFollows:number
  userId:string
}

function UserPageUserProfile({userId,TotalFriends,TotalFollows,setTotalFriends,setTotalFollows,totalFollows,isFollowing,isFriend,totalFriends,UserAndData}:props) {
  return (
    <div className='ProfilePageUserProfile  p-3'>
      
      <div className='w-full h-1/2 flex justify-around items-center'>
        { UserAndData.user.img   &&<img src={UserAndData.user.img} className='w-28 h-28 rounded-full'></img>}
        <ProfilePageUserProfileUserData totalFollows={totalFollows} UserAndData={UserAndData} totalFriends={totalFriends}/>

       </div>

        <ProfilePageUserProfileLinks TotalFriends={TotalFriends} TotalFollows={TotalFollows} setTotalFriends={setTotalFriends} setTotalFollows={setTotalFollows} isFollowing={isFollowing} friendId={UserAndData.user.id} isFriend={isFriend} userId={userId}/>

    </div>
  )
}

export default UserPageUserProfile