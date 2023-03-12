import Link from 'next/link';
import React from 'react'

interface friendWithImg{
    id: string;
    userName: string; 
    img: string  | null
}

interface props
{
    friend:friendWithImg
    userId:string
}

function ChatRightSideFriendProfile({userId,friend}:props) {
  return (
    <div className='w-2/5 h-full flex px-5 ChatShadow'>

            <div className='w-1/3 h-full flex justify-start items-center'>
                {friend.img && <Link href={`/UserPage/${friend.id}/${userId}`}   ><img src={friend.img} className='w-24 h-24 hover:scale-105 duration-200 cursor-pointer rounded-full'></img></Link>}
            </div>

            <div className='w-2/3 h-full flex justify-center items-center'>
                <p className='text-white text-xl font-medium'>{friend.userName}</p>
            </div>

    </div>
  )
}

export default ChatRightSideFriendProfile