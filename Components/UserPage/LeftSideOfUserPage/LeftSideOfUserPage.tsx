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
  friends:User[] 
  isFriend:boolean
  userId:string
  isFollowing:boolean
  Friend:UserAndData
  setFriend: React.Dispatch<React.SetStateAction<UserAndData>>
  setRender: React.Dispatch<React.SetStateAction<string>>
}
function LeftSideOfUserPage({setRender,setFriend,Friend,isFollowing,userId,isFriend,friends,UserAndData}:props) {
  return (
    <div className='w-1/4 flex flex-col items-center  mt-10 '>
        <UserPageUserProfile setRender={setRender} Friend={Friend}  userId={userId}  isFollowing={isFollowing} isFriend={isFriend}  UserAndData={UserAndData} />
        <UserPageFriends userId={userId} userName={UserAndData.user.userName}  friends={friends}/>
    </div>
  )
}

export default LeftSideOfUserPage