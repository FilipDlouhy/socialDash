import React from 'react'

interface friendWithImg{
    id: string;
    userName: string; 
    img: string  | null
}

interface props
{
    friend:friendWithImg
}

function ChatRightSideFriendProfile({friend}:props) {
  return (
    <div className='w-2/5 h-full flex px-1 ChatShadow'>

            <div className='w-1/3 h-full flex justify-start items-center'>
                {friend.img && <img src={friend.img} className='w-24 h-24 rounded-full'></img>}
            </div>

            <div className='w-2/3 h-full flex justify-center items-center'>
                <p className='text-white text-xl font-medium'>{friend.userName}</p>
            </div>

    </div>
  )
}

export default ChatRightSideFriendProfile