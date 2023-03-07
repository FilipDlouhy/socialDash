import Link from 'next/link'
import React from 'react'
import UserPageProfileAddRemoveButtons from './UserPageProfileAddRemoveButtons'

interface props {
    userId:string
    isFriend:boolean
    friendId:string
    isFollowing:boolean
    setTotalFriends: React.Dispatch<React.SetStateAction<number>>
    setTotalFollows: React.Dispatch<React.SetStateAction<number>>
    TotalFriends:number
    TotalFollows:number
}

function UserPageUserProfileLinks({TotalFriends,TotalFollows,setTotalFriends,setTotalFollows,isFollowing,friendId,isFriend,userId}:props) {
  return (
        <div>
            <UserPageProfileAddRemoveButtons TotalFriends={TotalFriends} TotalFollows={TotalFollows} setTotalFriends={setTotalFriends} setTotalFollows={setTotalFollows} isFollowing={isFollowing} friendId={friendId} isFriend={isFriend} userId={userId}/>

            <div className='w-full h-20 flex justify-center items-center'>
            <button  className='flex items-center justify-center h-9 w-1/3 shadow-lg text-white font-semibold hover:scale-90 cursor-pointer duration-200'>Show only Posts</button>
            <button  className='h-9 w-1/3 shadow-lg flex items-center justify-center text-white font-semibold hover:scale-90 cursor-pointer duration-200'>Show only Videos</button>
            <button  className='h-9 w-1/3 shadow-lg flex items-center justify-center text-white font-semibold hover:scale-90 cursor-pointer duration-200'>Show only Tweets</button>
            </div>
        </div>

  )
}

export default UserPageUserProfileLinks