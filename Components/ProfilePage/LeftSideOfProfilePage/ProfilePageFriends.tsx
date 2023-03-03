import { User } from '@prisma/client'
import React from 'react'
import ProfilePageFriend from './ProfilePageFriend'


interface props{
  friends:User[] 
}

function ProfilePageFriends({friends}:props) {
  return (
    <div className='ProfilePageFriends'>
        <div className='w-2/3 h-7 mb-3 mx-auto text-center text-white font-normal text-xl border-b-2'>
            <p>Your Friends</p>
        </div>


        <div className='w-full h-4/5 flex flex-wrap items-start justify-center'>
          {friends.map((friend)=>{
            let count =0
            if(count < 4)
            {
              return  <ProfilePageFriend friend={friend}/>
            }
            count++
          })}

            
        </div>

        <div className='w-full h-14 flex items-center justify-end pr-6'>
            <button className='w-40 h-7 flex justify-center items-center hover:scale-110 duration-150 cursor-pointer font-medium text-lg  text-white shadow-md rounded-md'>See All Friends </button>
        </div>    

    </div>
  )
}

export default ProfilePageFriends