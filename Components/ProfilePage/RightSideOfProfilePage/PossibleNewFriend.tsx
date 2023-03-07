import { User } from '@prisma/client'
import Link from 'next/link'
import React from 'react'

interface props{
    friend:User
    userId:string

}

function PossibleNewFriend({userId,friend}:props) {
  return (
    
    <Link href={`/UserPage/${friend.id}/${userId}`} className='w-24 h-24 m-3 hover:scale-110 duration-200 cursor-pointer shadow-2xl'>
        {friend.img &&<img src={friend.img} className='h-3/4 w-full'></img>}
        <p className='w-full h-1/4 text-sm text-white font-semibold flex items-center justify-center'>{friend.userName.slice(0,10)}</p>
    </Link>
  )
}

export default PossibleNewFriend