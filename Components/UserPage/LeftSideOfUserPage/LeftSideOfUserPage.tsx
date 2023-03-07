import { User } from '@prisma/client';
import React from 'react'
import UserPageFriends from './UserPageFriends';
import ProfilePageFriends from './UserPageFriends'
import UserPageUserProfile from './UserPageUserProfile';
import ProfilePageUserProfile from './UserPageUserProfile'

interface UserAndData {
  user: User;
  tweetLength: number;
  postLength: number;
}


interface props {
  UserAndData:UserAndData
  totalFriends:number
  friends:User[] 
  isFriend:boolean
  userId:string
  isFollowing:boolean
  totalFollows:number
  setTotalFriends: React.Dispatch<React.SetStateAction<number>>
  setTotalFollows: React.Dispatch<React.SetStateAction<number>>
  TotalFriends:number
  TotalFollows:number
}
function LeftSideOfUserPage({TotalFriends,TotalFollows,setTotalFriends,setTotalFollows,totalFollows,isFollowing,userId,isFriend,friends,totalFriends,UserAndData}:props) {
  return (
    <div className='w-1/4 flex flex-col items-center  mt-10 '>
        <UserPageUserProfile userId={userId} TotalFriends={TotalFriends} TotalFollows={TotalFollows} setTotalFriends={setTotalFriends} setTotalFollows={setTotalFollows} totalFollows={totalFollows} isFollowing={isFollowing} isFriend={isFriend} totalFriends={totalFriends} UserAndData={UserAndData} />
        <UserPageFriends userId={userId} userName={UserAndData.user.userName}  friends={friends}/>
    </div>
  )
}

export default LeftSideOfUserPage