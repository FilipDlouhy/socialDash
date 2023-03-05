import { User } from '@prisma/client'
import React from 'react'

interface props{
    user:User
}

function PossibleNewFriend({user}:props) {
  return (
    
    <div className='w-24 h-24 m-3 hover:scale-110 duration-200 cursor-pointer shadow-2xl'>
        {user.img &&<img src={user.img} className='h-3/4 w-full'></img>}
        <p className='w-full h-1/4 text-sm text-white font-semibold flex items-center justify-center'>{user.userName.slice(0,10)}</p>
    </div>
  )
}

export default PossibleNewFriend