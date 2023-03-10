import { User } from '@prisma/client'
import React from 'react'
import PossibleNewFriend from './PossibleNewFriend'

interface props{
  possibleFriends:User[]

}


function UserPagePossibleNewFriends({possibleFriends}:props) {
  return (
    <div className='ProfilePagePossibleFriends my-6'>
        <p className='w-full h-12 font-semibold flex items-center justify-center text-white text-xl'>Possible new Friends</p>

        <div className='h-5/6 flex items-start justify-center flex-wrap '>
              {possibleFriends.map((user)=>{
                return <PossibleNewFriend user={user}/>
              })}
        </div>

    </div>
  )
}

export default UserPagePossibleNewFriends