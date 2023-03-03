
import { User } from '@prisma/client'
import Link from 'next/link'
import React from 'react'

interface props {
  friend: User
}

function ProfilePageFriend({friend}:props) {
  return (
    <Link href={`/UserPage/${friend.id}`} className='w-44 h-44 m-3 hover:scale-95 duration-300 cursor-pointer bg-black'>
      {friend?.img && <img src={friend?.img} className="w-full h-full"></img>}
    </Link>
  )
}

export default ProfilePageFriend