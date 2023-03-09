import { User } from '@prisma/client';
import Link from 'next/link'
import React from 'react'
import ShowUserFollows from './ShowUserFollows';
import UserPageProfileAddRemoveButtons from './UserPageProfileAddRemoveButtons'
import UserPageProfileSetRenderButtons from './UserPageProfileSetRenderButtons';


interface UserAndData {
  user: User;
  tweetLength: number;
  postLength: number;
  }

interface props {
    userId:string
    isFriend:boolean
    friendId:string
    isFollowing:boolean
    totalFollowers:number
    setTotalFollowers:React.Dispatch<React.SetStateAction<number>>
    totalFriends:number
    setTotalFriends:React.Dispatch<React.SetStateAction<number>>
    userName:string
    setRender: React.Dispatch<React.SetStateAction<string>>

}

function UserPageUserProfileLinks({setRender,userName,totalFriends,totalFollowers,setTotalFriends,setTotalFollowers,isFollowing,friendId,isFriend,userId}:props) {
  return (
        <div>
            <UserPageProfileAddRemoveButtons totalFriends={totalFriends} totalFollowers={totalFollowers} setTotalFriends={setTotalFriends} setTotalFollowers={setTotalFollowers}  isFollowing={isFollowing} friendId={friendId} isFriend={isFriend} userId={userId}/>
            <ShowUserFollows userName={userName}/>

              <UserPageProfileSetRenderButtons setRender={setRender}/>

        </div>

  )
}

export default UserPageUserProfileLinks