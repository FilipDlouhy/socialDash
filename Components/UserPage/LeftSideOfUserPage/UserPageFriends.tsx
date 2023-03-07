import { User } from '@prisma/client'
import React from 'react'
import ProfilePageFriend from './UserPageFriend'
import ProfilePageShowAllFriendsButton from './UserPageShowAllFriendsButton'


interface UserAndData {
  user: User;
  tweetLength: number;
  postLength: number;
}
interface props{
  friends:User[] 
    userName:string
    userId:string

}

function UserPageFriends({userId, userName,friends}:props) {
  return (
    <div className='ProfilePageFriends'>
        <div className='w-2/3 h-7 mb-3 mx-auto text-center text-white font-normal text-xl border-b-2'>
            <p>{userName} Friends</p>
        </div>


        <div className='w-full h-4/5 flex flex-wrap items-start justify-center'>
          {friends.map((friend)=>{
            let count =0
            if(count < 4)
            {
              return  <ProfilePageFriend  userId={userId} friend={friend}/>
            }
            count++
          })}

            
        </div>

        <ProfilePageShowAllFriendsButton/>

    </div>
  )
}

export default UserPageFriends