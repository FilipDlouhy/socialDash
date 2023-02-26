import { User } from '@prisma/client'
import React from 'react'

interface props {
    user:User
}

function FriendModalFriend({user}:props) {
  return (
    <div className=' flex items-center justify-around w-60 h-60 hover:shadow-none duration-300 cursor-pointer mx-3 my-2 friendProfileShadow flex-col'>
            
       {user.img&&     <img className='h-1/2 w-full' src={user.img}></img>}
            <p>{user.userName}</p>
    </div>
  )
}

export default FriendModalFriend