import { User } from '@prisma/client'
import React from 'react'
import SuggestedFriend from './SugestedFriend'



interface props {
  userId:string
  friends:User[] | undefined
}
function SuggestedFriends({friends,userId}:props) {
  return (
    <div className='SuggestedFriends'>
        <div className='h-9 flex justify-center items-center w-full  border-b-2 mb-5'>
            <h1 className='font-medium text-xl text-white'>Suggested Friends</h1>
        </div>

        <div className='w-full h-3/4 px-3 flex justify-center items-start flex-wrap'>
            {
              friends?.map((friend)=>{
                if(friend.friends.includes(userId) === false)
                {
                  return <SuggestedFriend   friend={friend}/>
                }
              })
            }

            

        </div>

    </div>
  )
}

export default SuggestedFriends