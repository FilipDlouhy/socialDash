import { User } from '@prisma/client'
import React from 'react'
import SuggestedFriends from './SuggestedFriends'


interface props {
  userId:string,
  friends:User[] | undefined
}

function RightSideOfMain({friends,userId}:props) {
  return (
    <div className='h-full w-3/4 md:w-1/3  xl:w-1/4 flex justify-center items-start'>
      
      
        <SuggestedFriends friends={friends}  userId={userId} />
    </div>
  )
}

export default RightSideOfMain