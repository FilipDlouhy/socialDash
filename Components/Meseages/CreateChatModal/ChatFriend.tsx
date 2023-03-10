import React from 'react'
import ChatFriendCreateChatBTN from './ChatFriendCreateChatBTN';

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

function ChatFriend({friend,userId}:props) {
  return (
    <div className='w-64 h-64 m-2 ChatsShadow overflow-x-hidden overflow-y-auto '>
       {friend.img && <img src={friend.img} className='w-full h-1/2'></img>}

        <div className='w-full h-1/2 flex flex-col items-center justify-around'>
                <p className='text-xl  font-semibold'>{friend.userName}</p>
                <ChatFriendCreateChatBTN friendId={friend.id} userId={userId} />
        </div>

    </div>

  )
}

export default ChatFriend