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
    <div className='w-2/5 flex-col md:flex-row h-full items-center p-2 flex px-5 ChatShadow'>

            <div className='w-1/3 h-full  flex justify-start items-center'>
                {friend.img && <Link href={`/UserPage/${friend.id}/${userId}`}   ><img src={friend.img} className='w-12 h-12 sm:w-16 sm:h-16 lg:w-24 lg:h-24 hover:scale-105 duration-200 cursor-pointer rounded-full'></img></Link>}
            </div>

            <div className='w-2/3 h-full flex justify-center items-center'>
                <p className='text-white  text-sm lg:text-xl font-medium'>{friend.userName}</p>
            </div>

    </div>
  ) 
}

export default ChatRightSideFriendProfile