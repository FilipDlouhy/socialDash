import { User } from '@prisma/client'
import Link from 'next/link';
import React from 'react'
interface friendWithImg{
  id: string;
  userName: string; 
  img: string  | null
}
interface props {
    user:friendWithImg
    userId:string
}

function FriendModalFriend({user,userId}:props) {
  return (
    <Link  href={userId === user.id ?`/ProfilePage/${userId}`:`/UserPage/${user.id}/${userId}`} className=' flex items-center justify-around w-60 h-60 hover:shadow-none duration-300 cursor-pointer mx-3 my-2 friendProfileShadow flex-col'>
            
       {user.img&&     <img className='h-1/2 w-full' src={user.img}></img>}
            <p>{user.userName}</p>
    </Link>
  )
}

export default FriendModalFriend