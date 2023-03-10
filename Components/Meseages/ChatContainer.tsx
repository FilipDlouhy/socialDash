"use client"
import { useSession } from 'next-auth/react';
import React, { useState } from 'react'
import ChatRightSideEmpty from './ChatEmpty/ChatRightSideEmpty';
import ChatLeftSide from './ChatLeftSide/ChatLeftSide'
import ChatRightSide from './ChatRightSide/ChatRightSide'
  
interface friendWithImg{
    id: string;
    userName: string; 
    img: string  | null
}

interface props{
    userId:string
    friends:friendWithImg[]
}
interface CHAT
{
    chatId:string
    friend:friendWithImg
}

function ChatContainer({friends,userId}:props) {
    const [chat,setChat] = useState<CHAT>()
  return (
    <div className='w-full ChatsShadow  flex h-full'>
        <ChatLeftSide setChat={setChat} friends={friends} userId={userId} />
        {
            chat ? <ChatRightSide userId={userId} chat={chat}/>: <ChatRightSideEmpty/>
        }
        
    </div>   
  )
}

export default ChatContainer 